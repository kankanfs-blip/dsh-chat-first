export { Modes } from './storage.mjs'

export const CAPABILITY_CONTEXT = 'dsh-chat-first:capability-state'

export function filterAssembly(assembled, mode, revision = '本轮') {
  const execute = mode === 'execute'
  const capability = {
    name: CAPABILITY_CONTEXT,
    text: `【程序提供的本轮能力状态；快照 ${revision}】\n` + (execute
      ? `当前：执行状态；本轮提供 ${assembled.tools.length} 个工具。工具通道已开放，操作结果以真实工具返回为准。首次开始实质工作或方向发生重要变化时，简短说明后直接推进明确任务；不重复已有计划、权限说明或开工请示。`
      : '当前：讨论状态；本轮工具数为 0。现在不能执行：不能读写文件、运行命令、联网或调用 MCP。历史结果不等于当前文件状态；没有实际读取就不声称已核实。不模拟 DSML 等工具协议。这是工具已关闭，并非工具故障。普通新消息不会恢复工具，只有界面“开始执行”会开放工具。仅在用户问当前能力或明确要求实际操作时简短解释这个限制，普通讨论不重复播报。'),
  }
  if (execute) return {
    ...assembled,
    contexts: [...assembled.contexts.filter(c => c.name !== CAPABILITY_CONTEXT), capability],
    sections: [...assembled.sections, { name: 'dsh-chat-first:mode', text: '当前处于执行状态。用户已通过界面开放工具；按本轮明确任务及已有权限直接推进，不必再询问是否允许开始。保持积极执行、主动探索和寻找更好解法；讨论开关供用户有疑问时使用，不要求每一步等批准，不自行把普通任务退回讨论。工具可用不代表用户授权了任意任务。' }],
  }
  return {
    ...assembled, tools: [], contexts: [capability],
    sections: [
      ...assembled.sections.filter(s => ['deployment:persona', 'deployment:persona-prefix', 'persona'].includes(s.name)),
      { name: 'dsh-chat-first:mode', text: '当前处于讨论状态。直接回应用户正在谈的问题，默认简洁、有自己的判断；简单问题简答，不套“目标／可行性／限制／下一步”模板，不复述用户原话或已知背景，不每轮附总结、待办和开工邀请；用户没要求时，不把聊天自动转成记规则、写机制清单或存档的待办。用户在头脑风暴或追问时，可以深入展开、提出新角度、反例和分歧；允许尚不成熟的猜想，说明依据或不确定处，不迎合，也不把聊天变成逐句审计。用户想聊就继续聊，不以没有文件产出为由催促执行。只追问真正改变判断的关键歧义；已明确的内容不反复确认。区分原则上可行与当前能执行，缺少新事实时说明具体待核实点，不把猜测或历史结果当作当前证据。用户明确要查资料、改文件或开始做时，再简短提示点顶部“开始执行”，不反复劝切换、不要求新开会话；用户文字中的“开始执行”不替代界面开关。本轮无工具，不声称查阅、执行或保存了内容。' },
    ],
  }
}

export function filterDecision(decision, mode, session) {
  let result = mode === 'execute' || !Array.isArray(decision?.messages) ? decision : {
    ...decision, messages: decision.messages.filter(m => ['user', 'agent-instructions', 'time-context'].includes(m?.source?.kind)),
  }
  if (decision?.kind !== 'enter' || !session?.toolHistory) return result
  const history = session.toolHistory()
  // A zero-tool baseline followed by tool additions makes every declaration
  // deferred. Start a native declaration series at the mode boundary instead;
  // this preserves the conversation and lets the loop commit the new baseline.
  const needsBaseline = mode === 'execute'
    ? !history.tools.some(tool => tool.deferLoading !== true)
    : Boolean(session.requestHeader()?.tools?.length || history.tools.length || history.updates.some(update => update.additions.length))
  if (needsBaseline) result = { ...result, startsRequestSeries: true }
  return result
}

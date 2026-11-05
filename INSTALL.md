# 安装与升级

[English](INSTALL.en.md) · [项目介绍](README.zh-CN.md)

当前版本 **0.1.0**，仅兼容 **DSH 0.2.1-rc.5**。[发布页](https://github.com/kankanfs/dsh-chat-first/releases)提供版本、源码 ZIP 和安装包。

## 安装

1. 在 DSH 桌面打开 **插件 → 添加插件 → 安装第三方插件**。
2. npm 来源填 `dsh-chat-first@0.1.0`；也可用 GitHub 来源 `github:kankanfs/dsh-chat-first#v0.1.0`。
3. 若提示找不到包，镜像可能尚未同步；在安装源选择自定义地址 `https://registry.npmjs.org/` 后重试。
4. 按界面提示重启。新建会话，选择 **先聊后做 / Chat First**。
5. 默认讨论；点顶部 **开始执行** 后发送任务；一轮结束后可点 **继续讨论**。按钮本身不发送任务。

无需新模型、GPU 或额外 Key。已有普通会话不会自动变成本预设，默认预设也不改变。

## 从 alpha 升级

优先使用插件管理器的更新入口，目标版本为 `0.1.0`；若需要填写来源，使用上述精确版本。若本机不提供更新入口，停止相关任务后通过管理器卸载旧插件再安装新版，不手改整个 profile。卸载保留模式文件，重开同一 Chat First 会话时恢复其上次选择，包括执行状态。

本版数据格式、预设与服务标识未变，无迁移脚本。不要同时启用早期私人插件与公开版来控制同一预设。

## 本地源码与独立 Web

源码解压到固定目录，按桌面管理器实际支持的本地来源格式安装；链接安装后勿移动源码。CLI 命令 `dsh plugin --profile web add /absolute/path/to/dsh-chat-first` 只管理独立 Web profile，不能代替桌面安装。

## 反馈与回退

反馈操作系统、DSH/插件版本、安装来源和最短复现。不要公开密钥或完整私人会话。已验证内容见 [VALIDATION.md](VALIDATION.md)。

需要回退时停止相关任务，在插件管理器停用或卸载新版，再从发布页安装 `dsh-chat-first@0.0.1-alpha.1`，按提示重启。切换、卸载和回退不撤销操作，也不自动停止独立后台作业。

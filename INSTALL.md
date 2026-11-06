# 安装与升级

[English](INSTALL.en.md) · [项目介绍](README.zh-CN.md)

当前版本 **0.1.1**，仅兼容 **DSH 0.2.2-rc.1**。[发布页](https://github.com/kankanfs/dsh-chat-first/releases)提供版本、源码 ZIP 和安装包。

## 安装

1. 在 DSH 桌面打开 **插件 → 添加插件 → 安装第三方插件**。
2. npm 来源填 `dsh-chat-first@0.1.1`；也可用 GitHub 来源 `github:kankanfs/dsh-chat-first#v0.1.1`。
3. 若提示找不到包，镜像可能尚未同步；在安装源选择自定义地址 `https://registry.npmjs.org/` 后重试。
4. 按界面提示重启。新建会话，选择 **先聊后做 / Chat First**。
5. 默认讨论；点顶部 **开始执行** 后发送任务；一轮结束后可点 **继续讨论**。按钮本身不发送任务。

无需新模型、GPU 或额外 Key。已有普通会话不会自动变成本预设，默认预设也不改变。

## 直接更新已安装的版本

在插件列表打开 Chat First 的详情，选择“更新”，选中 `0.1.1`。即使旧版因不兼容而未加载，也从已安装项进入更新。按提示重启后，原 Chat First 会话恢复上次选择，包括执行状态。

本版数据格式、预设与服务标识未变，无迁移脚本。不要同时启用早期私人插件与公开版来控制同一预设。

## 本地源码与独立 Web

源码解压到固定目录，按桌面管理器实际支持的本地来源格式安装；链接安装后勿移动源码。CLI 命令 `dsh plugin --profile web add /absolute/path/to/dsh-chat-first` 只管理独立 Web profile，不能代替桌面安装。

## 反馈与回退

反馈操作系统、DSH/插件版本、安装来源和最短复现。不要公开密钥或完整私人会话。已验证内容见 [VALIDATION.md](VALIDATION.md)。

需要暂停使用时，先停止相关任务，再在插件管理器停用。DSH 0.2.1-rc.5 对应的旧版本仍可从发布页取得，版本为 `dsh-chat-first@0.1.0`。

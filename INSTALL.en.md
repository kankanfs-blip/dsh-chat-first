# Install and update

[简体中文](INSTALL.md) · [About](README.md)

Current version: **0.1.1**, for **DSH 0.2.2-rc.1 only**. [Releases](https://github.com/kankanfs/dsh-chat-first/releases) contain versioned source ZIPs and packages.

## Install

1. In DSH Desktop open **Plugins → Add plugin → Install third-party plugin**.
2. Use npm source `dsh-chat-first@0.1.1`, or GitHub source `github:kankanfs/dsh-chat-first#v0.1.1`.
3. If a mirror has not synced the package, select the custom registry `https://registry.npmjs.org/` and retry.
4. Restart if requested. Create a **先聊后做 / Chat First** conversation.
5. Discuss by default; click **Start working**, then send the task. After the turn finishes, **Discuss again** closes tools. Buttons do not send messages.

No extra model, GPU or key. Ordinary conversations and your default preset are not converted.

## Update the installed plugin

Open Chat First in the installed plugin list and choose Update, then select `0.1.1`. Use the installed entry even when the previous version was skipped as incompatible. Restart if requested. Existing Chat First conversations restore their prior selection, including execution.

Data format, preset and service identity are unchanged; no migration is required. Do not enable an early private implementation and the public plugin to control the same preset.

## Local source and separate Web profile

Unpack source into a permanent directory and use a local source format actually supported by Desktop. Keep linked source in place. CLI `dsh plugin --profile web add /absolute/path/to/dsh-chat-first` manages a separate Web profile, not Desktop.

## Report or roll back

Include operating system, DSH/plugin versions, source and minimal reproduction, without keys or full private conversations. See [validation](VALIDATION.en.md).

To suspend the plugin, stop relevant work and disable it through Desktop. Chat First `0.1.0` remains available for DSH 0.2.1-rc.5.

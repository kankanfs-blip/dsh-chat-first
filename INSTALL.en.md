# Install and update

[简体中文](INSTALL.md) · [About](README.md)

Current version: **0.1.0**, for **DSH 0.2.1-rc.5 only**. [Releases](https://github.com/kankanfs/dsh-chat-first/releases) contain versioned source ZIPs and packages.

## Install

1. In DSH Desktop open **Plugins → Add plugin → Install third-party plugin**.
2. Use npm source `dsh-chat-first@0.1.0`, or GitHub source `github:kankanfs/dsh-chat-first#v0.1.0`.
3. If a mirror has not synced the package, select the custom registry `https://registry.npmjs.org/` and retry.
4. Restart if requested. Create a **先聊后做 / Chat First** conversation.
5. Discuss by default; click **Start working**, then send the task. After the turn finishes, **Discuss again** closes tools. Buttons do not send messages.

No extra model, GPU or key. Ordinary conversations and your default preset are not converted.

## Update from alpha

Use the plugin manager's update action targeting `0.1.0`; if it requests a source, use the exact version above. If your manager offers no update action, stop relevant work, uninstall the old plugin through the manager and install the new one. Do not rewrite a whole profile. Uninstalling retains mode files; the same Chat First conversation restores its prior selection, including execution.

Data format, preset and service identity are unchanged; no migration is required. Do not enable an early private implementation and the public plugin to control the same preset.

## Local source and separate Web profile

Unpack source into a permanent directory and use a local source format actually supported by Desktop. Keep linked source in place. CLI `dsh plugin --profile web add /absolute/path/to/dsh-chat-first` manages a separate Web profile, not Desktop.

## Report or roll back

Include operating system, DSH/plugin versions, source and minimal reproduction, without keys or full private conversations. See [validation](VALIDATION.en.md).

To roll back, stop relevant work, disable/uninstall through Desktop, install `dsh-chat-first@0.0.1-alpha.1` from the release page and restart if requested. Mode switching, uninstalling and rollback do not undo work or stop independent background jobs.

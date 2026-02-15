# Mudstack plugin template and examples

Sample and boilerplate [Mudstack](https://www.mudstack.com) plugins. This repo is not part of the main Mudstack app; it helps you start or learn how to build plugins that run inside Mudstack (e.g. thumbnailers, context menu commands, custom integrations).

- **[@mudstack/plugins on npm](https://www.npmjs.com/package/@mudstack/plugins)** – Types and base class for building plugins with IntelliSense.

## Getting started (template)

Start a new plugin by **forking this repo** or using **Use this template** (if enabled). The root of the repo is the plugin template.

1. **Rename the plugin** in `manifest.json` and `package.json`:
   - `manifest.json`: change `id`, `name`, `description`, `author`.
   - `package.json`: change `name`, `description`, `author`.
2. Run **`yarn install`** or **`npm install`** in the repo root.
3. **Implement your logic** in `index.js`. Your class extends `MudstackPlugin` and has access to `this.api` (logging, events, db, config, etc.). See [@mudstack/plugins](https://www.npmjs.com/package/@mudstack/plugins) for the full API.
4. **Install the plugin** in Mudstack: copy this folder into your Mudstack plugins directory, or follow Mudstack’s plugin installation docs.

You can add `dependencies`, `subscriptions`, and `registrations` in `manifest.json` as needed (see the `examples/` folder for reference).

## Examples

The `examples/` folder contains reference plugins you can learn from or try:

- **hello-world** – Minimal plugin: logs on activate/deactivate and optionally subscribes to an event.
- **context-menu-example** – Adds a context menu command and handles the event when the user runs it.

Use them as reference, or copy a folder into your Mudstack plugins directory to run them.

## Directory layout

```
mudstack-plugins/
├── README.md           # This file
├── LICENSE
├── .gitignore
├── package.json        # Template plugin (rename and customize)
├── manifest.json
├── index.js
└── examples/
    ├── hello-world/
    │   ├── package.json
    │   ├── manifest.json
    │   └── index.js
    └── context-menu-example/
        ├── package.json
        ├── manifest.json
        └── index.js
```

Each plugin is a standalone folder (examples have their own `package.json`). Install dependencies inside the plugin folder you’re working on (repo root for the template, or an example folder).

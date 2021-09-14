# Getting Started

## Usage

### Installation and version history

Install the library and Vue.js v2:

```bash
npm i --save-prefix= vue@2 @wikimedia/wvui
```

WVUI is [semantically versioned](https://semver.org). See the [changelog](CHANGELOG.md) for release
notes.

We recommend pinning WVUI to an exact patch version. For example:

```json
  …,
  "dependencies": {
    "…": "…",
    "@wikimedia/wvui": "1.2.3",
    "…": "…"
  }
  …,
```

> WVUI is semantically versioned but bugs occasionally slip through. They're easier for consumers to
> identify when upgrades are tracked deliberately via package.json. If
> [semver ranges](https://docs.npmjs.com/misc/semver) are used instead, like `"^1.2.3"`, only the
> verbose and noisy package-lock.json will change on an upgrade which may go unnoticed.
> Additionally, new features are easier to consider and socialize at upgrade time when minor / major
> version upgrades are intentional and reflected in package.json.

> The recommendation to use exact patch versions like `"1.2.3"` may seem pedantic but if a project
> specifies dependencies with looser versioning instead, that project will be at the mercy of its
> dependencies instead of in control of them.

### Integration

The following example demonstrates an integration with the Vue root App that has access to the
entire WVUI component library and styles:

```html
<!-- App.vue -->
<template>
	<wvui-button>Hello WVUI</wvui-button>
</template>

<script lang="ts">
	import components from "@wikimedia/wvui";
	import "@wikimedia/wvui/dist/wvui.css";

	export default {
		name: "App",
		components, // App can compose any WVUI component.
	};
</script>
```

```ts
// index.ts
import Vue from "vue";
import App from "./App.vue";

new Vue({
	el: "#app",
	components: { App },
	render: (createElement) => createElement(App),
});
```

### Different builds

There is currently one bundle available:

-   **Combined**: the complete library. This bundle is the simplest to use because it contains all
    code but is not performant if only part is used or if different parts should be loaded at
    different times. ⚠️ This chunk is standalone and should not be loaded with split chunks.

    -   **wvui**.js/css: the complete library, excluding icons, and default export. No other chunks
        required unless additional icons not referenced by the core library are used.

    -   **wvui-icons**.js: the complete iconography (optional).

Each chunk is side-effect free. All chunks are fully compiled ES5 / CSS and require a Vue.js
runtime. See [peerDependencies](package.json).

See the [performance section](DEVELOPERS.md#performance) for related topics.

## Development

### Quick start

Get running on your host machine quickly with:

```bash
npm install
npm start
```

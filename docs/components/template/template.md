---
sidebarDepth: 3
---

<script setup>
// Import components here.
import WvuiComponent from '../../../src/components/wvui-component/WvuiComponent.vue';
import Wrapper from '../../utils/Wrapper.vue';
import DemoComponent from './DemoComponent.vue';
</script>

**Don't forget to add your component to `docs/.vitepress/config.js`!**

# Component name

Component description

## Demos

### First Demo

The Wrapper component offers some basic styles to visually separate the demo
from the rest of the content.

You can add a WVUI component directly:
<Wrapper>
<WvuiComponent :someProp="true" />
</Wrapper>

```vue
<WvuiComponent :someProp="true"/>
```

Or you can add a demo component and import it as a snippet to show the code:
<Wrapper>
<DemoComponent />
</Wrapper>

<<< @/components/template/DemoComponent.vue

### Second Demo

...would go here

## Usage

### Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| **propName** | Prop description | `PropType` | `defaultValue` |

### Slots

| Name | Description | Default |
| --- | --- | --- |
| **default** | Slot description | Default value (or leave blank) |

### Events

| Name | Description | Value |
| --- | --- | --- |
| **eventName** | Event description | Emitted value (or leave blank) |

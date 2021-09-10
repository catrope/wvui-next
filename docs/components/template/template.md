---
sidebarDepth: 3
---

<script setup>
// Import components here.
import WvuiComponent from '../../src/components/wvui-component/WvuiComponent.vue';
import DemoComponent from './DemoComponent.vue';
</script>

# Component name

Component description

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

## Demos

### First Demo

(You can add a WVUI component directly)
<WvuiComponent :someProp="true" />

```vue
<WvuiComponent :someProp="true"/>
```

(Or you can add a demo component and import it as a snippet to show the code)
<DemoComponent />

<<< @/components/template/DemoComponent.vue

### Second Demo

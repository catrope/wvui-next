---
sidebarDepth: 3
---

<script setup>
import WvuiButton from '../../../src/components/button/Button.vue';
</script>

# Button

A `<button>` element wrapping slotted content.

## Usage

### Props

**TODO:** We could use a better way to describe custom types like PrimaryAction. This is cluttered
in both the markdown and the resulting table.

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| **action** | The kind of action taken when clicked | `PrimaryAction` <br><br>Options:<br>`default` <br>`progressive` <br>`destructive` | `PrimaryAction.Default` |
| **quiet** | True if button should be visually less prominent | `Boolean` | `false` |

### Slots

| Name | Description | Default |
| --- | --- | --- |
| **default** | Button content | - |

### Events

| Name | Description | Value |
| --- | --- | --- |
| **click** | Emitted on click | - |

## Demos

### Default

<WvuiButton>Click me</WvuiButton>

```vue
<WvuiButton>Click me</WvuiButton>
```

### Progressive

<WvuiButton action="progressive">Click me</WvuiButton>

```vue
<WvuiButton action="progressive">Click me</WvuiButton>
```

### Destructive

<WvuiButton action="destructive">Click me</WvuiButton>

```vue
<WvuiButton action="destructive">Click me</WvuiButton>
```

### Default, quiet

<WvuiButton :quiet="true">Click me</WvuiButton>

```vue
<WvuiButton :quiet="true">Click me</WvuiButton>
```

### Progressive, quiet

<WvuiButton action="progressive" :quiet="true">Click me</WvuiButton>

```vue
<WvuiButton action="progressive" :quiet="true">Click me</WvuiButton>
```

### Destructive, quiet

<WvuiButton action="destructive" :quiet="true">Click me</WvuiButton>

```vue
<WvuiButton action="destructive" :quiet="true">Click me</WvuiButton>
```

### Disabled

<WvuiButton disabled>Click me</WvuiButton>

```vue
<WvuiButton disabled>Click me</WvuiButton>
```

### Disabled, quiet

<WvuiButton :quiet="true" disabled>Click me</WvuiButton>

```vue
<WvuiButton :quiet="true" disabled>Click me</WvuiButton>
```

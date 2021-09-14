---
sidebarDepth: 3
---

<script setup>
import WvuiButton from '../../../src/components/button/Button.vue';
</script>

# Button

A `<button>` element wrapping slotted content.

## Demos

### Default

<Wrapper>
<template v-slot:demo>
<WvuiButton>Click me</WvuiButton>
</template>

<template v-slot:code>

```vue
<WvuiButton>Click me</WvuiButton>
```

</template>
</Wrapper>

### Progressive

<Wrapper>
<template v-slot:demo>
<WvuiButton action="progressive">Click me</WvuiButton>
</template>

<template v-slot:code>

```vue
<WvuiButton action="progressive">Click me</WvuiButton>
```

</template>
</Wrapper>

### Destructive

<Wrapper>
<template v-slot:demo>
<WvuiButton action="destructive">Click me</WvuiButton>
</template>

<template v-slot:code>

```vue
<WvuiButton action="destructive">Click me</WvuiButton>
```

</template>
</Wrapper>

### Default, quiet

<Wrapper>
<template v-slot:demo>
<WvuiButton :quiet="true">Click me</WvuiButton>
</template>

<template v-slot:code>

```vue
<WvuiButton :quiet="true">Click me</WvuiButton>
```

</template>
</Wrapper>

### Progressive, quiet

<Wrapper>
<template v-slot:demo>
<WvuiButton action="progressive" :quiet="true">Click me</WvuiButton>
</template>

<template v-slot:code>

```vue
<WvuiButton action="progressive" :quiet="true">Click me</WvuiButton>
```

</template>
</Wrapper>

### Destructive, quiet

<Wrapper>
<template v-slot:demo>
<WvuiButton action="destructive" :quiet="true">Click me</WvuiButton>
</template>

<template v-slot:code>

```vue
<WvuiButton action="destructive" :quiet="true">Click me</WvuiButton>
```

</template>
</Wrapper>

### Disabled

<Wrapper>
<template v-slot:demo>
<WvuiButton disabled>Click me</WvuiButton>
</template>

<template v-slot:code>

```vue
<WvuiButton disabled>Click me</WvuiButton>
```

</template>
</Wrapper>

### Disabled, quiet

<Wrapper>
<template v-slot:demo>
<WvuiButton :quiet="true" disabled>Click me</WvuiButton>
</template>

<template v-slot:code>

```vue
<WvuiButton :quiet="true" disabled>Click me</WvuiButton>
```

</template>
</Wrapper>

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

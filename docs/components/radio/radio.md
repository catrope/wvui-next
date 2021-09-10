---
sidebarDepth: 3
---

<script setup>
import Wrapper from '../../utils/Wrapper.vue';
import RadioGroup from './RadioGroup.vue';
import InlineRadios from './InlineRadios.vue';
</script>

# Radio

A binary input that always exists in a group, in which only one input can be
on at a time.

Typical use will involve using `v-for` to loop through an array of items and
output a Radio component for each one. Each Radio will have the same `v-model`
and `name` props, but different `inputValue` props and label content.

The `v-model` value is the `inputValue` of the Radio that is currently on.

## Usage

### Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| **modelValue** | Value provided by v-model in a parent component.<br><br>Rather than directly binding a value prop to this component, use v-model to bind a string, number, or boolean value. This value represents the value of the radio input that is currently on. | `[ String, Number, Boolean ]` | `false` |
| **inputValue** | HTML "value" attribute to assign to the input. Required for input groups. | `[ String, Number, Boolean ]` | `false` |
| **name** | HTML "name" attribute to assign to the input. Required for input groups. | `String` | `''` |
| **disabled** | Whether the disabled attribute should be added to the `<input>` element. | `Boolean` | `false` |
| **inline** | Whether the component should display inline. By default, `display: block` is set and a margin exists between sibling components, for a stacked layout. | `Boolean` | `false` |

### Slots

| Name | Description | Default |
| --- | --- | --- |
| **default** | Input label content | - |

### Events

| Name | Description | Value |
| --- | --- | --- |
| **update:modelValue** | Emitted on input change | New `modelValue` |

## Demos

### Radio group

<Wrapper>
<RadioGroup />
</Wrapper>

<<< @/components/radio/RadioGroup.vue

### Inline radios

<Wrapper>
<InlineRadios />
</Wrapper>

<<< @/components/radio/RadioGroup.vue

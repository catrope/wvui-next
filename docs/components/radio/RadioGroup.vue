<template>
	<div>
		<p>Radio group value: {{ radioValue }}</p>
		<wvui-radio
			v-for="radio in radios"
			:key="'radio-' + radio.value"
			v-model="radioValue"
			name="radio-group"
			:input-value="radio.value"
			:disabled="radio.disabled"
			@update:model-value="onUpdate"
		>
			{{ radio.label }}
		</wvui-radio>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import WvuiRadio from '../../../src/components/radio/Radio.vue';

export default defineComponent( {
	name: 'RadioGroup',
	components: { WvuiRadio },
	setup() {
		const radioValue = ref( 'radio-2' );
		const radios = [
			{
				label: 'Radio 1',
				value: 'radio-1',
				disabled: false
			},
			{
				label: 'Radio 2 (initially selected)',
				value: 'radio-2',
				disabled: false
			},
			{
				label: 'Radio 3, which has a very long label that spans onto a second line',
				value: 'radio-3',
				disabled: false
			},
			{
				label: 'Radio 4 (disabled)',
				value: 'radio-4',
				disabled: true
			}
		];

		const onUpdate = ( value: string ): void => {
			// eslint-disable-next-line no-console
			console.log( 'update:modelValue event: ' + value );
		};

		return {
			radioValue,
			radios,
			onUpdate
		};
	}
} );
</script>

<style scoped>
p {
	font-weight: bold;
	margin-top: 0;
}
</style>

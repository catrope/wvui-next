<template>
	<div class="vp-wrapper" :class="rootClasses">
		<div class="vp-wrapper__demo">
			<slot name="demo" />
			<wvui-button
				class="vp-wrapper__demo__button"
				:quiet="true"
				@click="onClick"
			>
				{{ buttonLabel }}
			</wvui-button>
		</div>
		<div v-show="showCode" class="vp-wrapper__code">
			<slot name="code" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import WvuiButton from '../../src/components/button/Button.vue';

export default defineComponent( {
	name: 'Wrapper',
	components: { WvuiButton },
	setup() {
		const showCode = ref( false );
		const buttonLabel = computed( () => {
			return showCode.value === true ? 'Hide code' : 'Show code';
		} );
		const rootClasses = computed( () => {
			return {
				'vp-wrapper--show-code': showCode.value
			};
		} );
		const onClick = (): void => {
			showCode.value = !showCode.value;
		};
		return {
			showCode,
			buttonLabel,
			rootClasses,
			onClick
		};
	}
} );
</script>

<style lang="less">
@import ( reference ) '../../src/themes/wikimedia-ui.less';

.vp-wrapper {
	margin-top: 16px;

	&__demo {
		border: @border-width-base @border-style-base @wmui-color-base70;
		border-radius: @border-radius-base;
		font-size: @font-size-base;
		padding: 24px;
		position: relative;

		&__button {
			position: absolute;
			right: 0;
			bottom: 0;
		}
	}

	&__code {
		div[class*="language-"] {
			border-top-left-radius: 0;
			border-top-right-radius: 0;
			margin-top: 0;
		}
	}
}

</style>

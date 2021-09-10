<template>
	<div class="vp-wrapper">
		<slot />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent( {
	name: 'Wrapper'
} );
</script>

<style lang="less">
@import ( reference ) '../../src/themes/wikimedia-ui.less';

.vp-wrapper {
	border: @border-width-base @border-style-base @wmui-color-base70;
	border-radius: @border-radius-base;
	font-size: @font-size-base;
	margin-top: 16px;
	padding: 24px;
}

</style>

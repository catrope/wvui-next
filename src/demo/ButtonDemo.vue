<template>
	<div class="wvui-buttondemo">
		<h2>WvuiButton.vue</h2>
		<wvui-button @click="clicked++">
			Default Button
		</wvui-button>

		<wvui-button action="progressive" @click="clicked++">
			Progressive button
		</wvui-button>

		<wvui-button action="destructive" @click="clicked--">
			Destructive button
		</wvui-button>

		<wvui-button quiet @click="clicked++">
			Quiet button (shh)
		</wvui-button>

		<pre>Clicked a total of {{ clicked }} times.</pre>
	</div>
</template>

<script>
import { WvuiButton } from '../entries/wvui';
import { defineComponent } from 'vue';

export default defineComponent( {
	components: {
		WvuiButton
	},

	data() {
		return {
			clicked: 0
		};
	}
} );
</script>

<style lang="less">
.wvui-buttondemo {
	pre {
		margin-top: 1em;
	}
}
</style>

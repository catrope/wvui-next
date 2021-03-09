import replace from '@rollup/plugin-replace';
import vue from '@vitejs/plugin-vue';
import typescript from 'rollup-plugin-typescript2';
import { version } from './package.json';
import { resolve } from 'path';

/**
 * @type {import('vite').UserConfig}
 */
export default {
	build: {
		// See https://vitejs.dev/guide/build.html#library-mode
		lib: {
			entry: resolve(__dirname, 'src/entries/wvui.ts'),
			name: 'WVUI'
		},

		minify: true,

		rollupOptions: {
			external: [ 'vue' ],

			output: {
				globals: {
					vue: 'Vue'
				}
			},

			plugins: [ typescript() ]
		}
	},
	plugins: [
		replace( {
			preventAssignment: true,
			VERSION: JSON.stringify( version )
		} ),
		vue(),
	]
};
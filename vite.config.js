import vue from '@vitejs/plugin-vue';

const { resolve } = require( 'path' );
const fs = require( 'fs' );

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
			}
		}
	},
	plugins: [
		[ vue() ],
	]
};
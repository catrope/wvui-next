import { addParameters } from '@storybook/vue3';
import './preview.less';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// See wikimedia-ui-base breakpoints
const viewports = {
	mobile: {
		name: 'Mobile',
		styles: { width: '320px', height: '320px' }
	},
	tablet: {
		name: 'Tablet',
		styles: { width: '720px', height: '720px' }
	},
	desktop: {
		name: 'Desktop',
		styles: { width: '1000px', height: '1000px' }
	},
	'desktop-wide': {
		name: 'Wide desktop',
		styles: { width: '1200px', height: '1200px' }
	},
	'desktop-extra-wide': {
		name: 'Extra-wide desktop',
		styles: { width: '2000px', height: '2000px' }
	}
};

const backgrounds = {
	values: [
		{ name: 'white', value: '#fff' }, // @wmui-color-base100
		{ name: 'dark', value: '#202122' }, // @wmui-color-base10
		{ name: 'black', value: '#000' } // @wmui-color-base0
	]
};

addParameters( {
	viewport: { viewports },
	backgrounds,
	controls: {
		expanded: true
	}
} );

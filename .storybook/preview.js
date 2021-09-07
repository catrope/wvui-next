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

// Set up language and direction swtichers in the toolbar.
export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', title: 'English' },
        { value: 'es', title: 'Español' },
		{ value: 'he', title: 'עברית' }
      ],
    },
  },

  direction: {
	  name: 'Direction',
	  description: 'Text directionality',
	  defaultValue: 'ltr',
	  toolbar: {
		  icon: 'book',
		  items: [
			  { value: 'ltr', right: '(ltr)', title: 'Left to right' },
			  { value: 'rtl', right: '(rtl)', title: 'Right to left' }
		  ]
	  }
  }
};

// A decorator is usually used to wrap stories in additional elements. However,
// we can use it here to set the `lang` and `dir` attributes on the <html> tag
// when a story mounts, which happens every time one of these attributes is
// changed by the user via the toolbar.
export const decorators = [ ( story, context ) => ( {
  components: { story },
  data() {
	  return { context }
  },
  mounted() {
	window.document.documentElement.lang = this.context.globals.locale;
	window.document.documentElement.dir = this.context.globals.direction;
  },
  template: '<story />'
} ) ];

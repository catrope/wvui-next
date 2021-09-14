module.exports = {
	title: 'WVUI-next',

	themeConfig: {
		docsDir: 'docs',
		lastUpdated: 'Last Updated',

		nav: [
		  {
			text: 'GitHub',
			link: 'https://github.com/catrope/wvui-next'
		  }
		],
	
		sidebar: {
			'/': [
			 	{
					text: 'Introduction',
					children: [
						{ text: 'About', link: '/'},
						{ text: 'Getting started', link: '/introduction/getting-started' },
						{ text: 'Library guiding principles', link: '/introduction/guiding-principles' }
					]
				},
				{
					text: 'Contributing',
					children: [
						{ text: 'Guidelines', link: '/contributing/contributing-guidelines' },
						{ text: 'For developers', link: '/contributing/for-developers' }
					]
				},
				{
					text: 'Design Tokens'
				},
				{
					text: 'Components',
					children: [
						{ text: 'Button', link: '/components/button/button' },
						{ text: 'Radio', link: '/components/radio/radio' }
					]
				}
			]
		}
	}
}

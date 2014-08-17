Router.map(function() {
	this.route('home', {
		path: '/',
		template: 'main',
		data: {
			meta: {
				title: 'Matt Finucane - CV',
				description: 'Online CV for Matt Finucane - Frontend Javascript developer',
				keywords: 'matt finucane, cv, profile, skills, qualifications'
			}
		},
		yieldTemplates: {
			'components_common_header': {to: 'header'},
			'views_home': {to: 'content'},
			'components_common_footer': {to: 'footer'}
		}
	});

	this.route('portfolio', {
		path: '/portfolio',
		template: 'main',
		yieldTemplates: {
			'components_common_header': {to: 'header'},
			'views_portfolio': {to: 'content'},
			'components_common_footer': {to: 'footer'}
		}
	});

	this.route('about', {
		path: '/about',
		template: 'main',
		yieldTemplates: {
			'components_common_header': {to: 'header'},
			'views_about': {to: 'content'},
			'components_common_footer': {to: 'footer'}
		}
	});
});
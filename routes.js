Router.map(function() {
	this.route('home', {
		path: '/',
		template: 'main',
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

	// this.route('print', {
	// 	path: 'print',
	// 	template: 'print',
	// 	yieldTemplates: {
	// 		'components_common_header': {to: 'header'},
	// 		'components_profile': {to: 'profile'},
	// 		'components_skills': {to: 'skills'},
	// 		'components_experience': {to: 'experience'},
	// 		'components_qualifications': {to: 'qualifications'},
	// 		'components_interests': {to: 'interests'},
	// 		'components_common_footer': {to: 'footer'}
	// 	}
	// });
});
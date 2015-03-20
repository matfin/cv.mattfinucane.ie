Router.configure({
	notFoundTemplate: 'views_notfound'
});

Router.map(function() {
	this.route('home', {
		path: '/',
		template: 'main',
		trackPageView: true,
		yieldTemplates: {
			'components_common_header': {to: 'header'},
			'views_home': {to: 'content'},
			'components_common_footer': {to: 'footer'}
		}
	});

	this.route('portfolio', {
		path: '/portfolio',
		template: 'main',
		trackPageView: true,
		yieldTemplates: {
			'components_common_header': {to: 'header'},
			'views_portfolio': {to: 'content'},
			'components_common_footer': {to: 'footer'}
		}
	});

	this.route('about', {
		path: '/about',
		template: 'main',
		trackPageView: true,
		yieldTemplates: {
			'components_common_header': {to: 'header'},
			'views_about': {to: 'content'},
			'components_common_footer': {to: 'footer'}
		}
	});
});
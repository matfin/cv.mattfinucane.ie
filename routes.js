Router.configure({
	notFoundTemplate: 'views_notfound'
});

Router.onAfterAction(function() {
	/**
	 *	Setting up SEO after route has completed
	 */
	var seoData = App.models.seo.findOne({'route_name': this.route.name});

	if(typeof seoData !== 'undefined') {

		SEO.set({
			title: seoData.title,
			meta: {
				description: seoData.description,
				keywords: seoData.keywords
			}
		});
	}
});

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
});
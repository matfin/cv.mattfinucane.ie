Router.map(function() {
	this.route('home', {
		path: '/',
		template: 'main',
		yieldTemplates: {
			'components_common_header': {to: 'header'},
			'components_common_footer': {to: 'footer'}
		}
	});
});
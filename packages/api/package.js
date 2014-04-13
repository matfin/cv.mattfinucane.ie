Package.describe({
	summary: "Internal package - Fetches json data via ajax and stores it in Meteor Collections."
});

Package.on_use(function(api) {

	api.export('Api');
	api.add_files('api.js', 'client');
});
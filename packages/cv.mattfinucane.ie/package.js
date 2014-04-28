Package.describe({
	summary: "Stores settings and sets up Meteor Collections."
});

Package.on_use(function(api) {

	api.use('deps', 'client');
	api.use('jquery', 'client');
	api.use('underscore', 'client');

	api.export('App');
	api.export('Api');
	api.export('Dependencies');
	api.export('Device');

	api.add_files([
		'_src/app.js',
		'_src/api.js',
		'_src/dependencies.js',
		'_src/device.js'
	], 'client');
});
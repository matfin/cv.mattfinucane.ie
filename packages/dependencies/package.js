Package.describe({
	summary: "Handle dependencies and events for this app. Automatically call re-render functions on an event."
});

Package.on_use(function(api) {
	api.use('deps', 'client');
	api.use('jquery', 'client');
	api.use('underscore', 'client');
	api.export('Dependencies');
	api.add_files('dependencies.js', 'client');
});
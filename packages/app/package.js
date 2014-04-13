Package.describe({
	summary: "Stores settings and sets up Meteor Collections."
});

Package.on_use(function(api) {
	api.export('App');
	api.add_files('app.js', 'client');
});
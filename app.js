Meteor.startup(function() {
	if(Meteor.isClient) {
		console.log('Starting CV app');

		// Device capabilities
		Device.reset();

		// Populate the Collections
		if(App.models.staticContent.find({}).count() === 0) {
			Api.fetch('staticContent').then(function() {
				Dependencies.staticContentLoadedDependency.changed();
			})
			.fail(function(msg) {
				console.log(msg);
			});
		}
		if(App.models.skills.find({}).count() === 0) {
			Api.fetch('skills').then(function() {
				Dependencies.skillsContentLoadedDependency.changed();
			})
			.fail(function(msg) {
				console.log(msg);
			});
		}
		if(App.models.experience.find({}).count() === 0) {
			Api.fetch('experience').then(function() {
				Dependencies.experienceContentLoadedDependency.changed();
			})
			.fail(function(msg) {
				console.log(msg);
			});
		}
		if(App.models.portfolio.find({}).count() === 0) {
			Api.fetch('portfolio').then(function() {
				Dependencies.portfolioContentLoadedDependency.changed();
			})
			.fail(function(msg) {
				console.log(msg);
			});
		}
	}
});
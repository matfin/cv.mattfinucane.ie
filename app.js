Meteor.startup(function() {
	if(Meteor.isClient) {
		console.log('Starting CV app');

		// Device capabilities
		Device.reset();

		// Populate the Collections
		if(App.models.staticContent.find({}).count() === 0) {
			Api.fetch('staticContent');
		}
		if(App.models.skills.find({}).count() === 0) {
			Api.fetch('skills');
		}
		if(App.models.experience.find({}).count() === 0) {
			Api.fetch('experience');
		}
		if(App.models.portfolio.find({}).count() === 0) {
			Api.fetch('portfolio');
		}
	}
});
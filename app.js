Meteor.startup(function() {
	if(Meteor.isClient) {
		console.log('Starting CV app');

		// Populate the Collections
		if(App.models.staticContent.find({}).count() === 0) {
			Api.fetch('staticContent');
		}
	}
});
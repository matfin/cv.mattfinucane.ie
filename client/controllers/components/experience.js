Template['components_experience'].created = function() {
};

Template['components_experience'].rendered = function() {
	
};

Template['components_experience'].destroyed = function() {
	
};

Template['components_experience'].data = function() {
	return App.models.staticContent.findOne({"title": "work-experience"});
};

Template['components_experience'].jobs = function() {
	return App.models.experience.find({}).fetch();
}
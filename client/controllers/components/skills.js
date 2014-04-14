Template['components_skills'].created = function() {
};

Template['components_skills'].rendered = function() {
	
};

Template['components_skills'].destroyed = function() {
	
};

Template['components_skills'].data = function() {
	return App.models.skills.find({}).fetch();
};
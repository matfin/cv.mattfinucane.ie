Template['components_profile'].created = function() {
};

Template['components_profile'].rendered = function() {
	
};

Template['components_profile'].destroyed = function() {
	
};

Template['components_profile'].data = function() {
	return App.models.staticContent.findOne({'title':'profile'});
};
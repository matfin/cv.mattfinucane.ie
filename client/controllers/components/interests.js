Template['components_interests'].created = function() {
};

Template['components_interests'].rendered = function() {
	
};

Template['components_interests'].destroyed = function() {
	
};

Template['components_interests'].data = function() {
	return App.models.staticContent.findOne({"title": "interests"});
};
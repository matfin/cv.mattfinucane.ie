Template['components_common_header'].created = function() {
};

Template['components_common_header'].rendered = function() {
	
};

Template['components_common_header'].destroyed = function() {
	
};

Template['components_common_header'].data = function() {
	return App.models.staticContent.findOne({'title':'contact'});
};
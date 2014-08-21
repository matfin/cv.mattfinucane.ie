/**
Template - components_about
{{created}}	
@private
@return	undefined
**/
Template['components_about'].created = function() {
};

/**
Template - components_about
{{rendered}}	
@private
@return	undefined
**/
Template['components_about'].rendered = function() {
	
};

/**
Template - components_about
{{destroyed}}	
@private
@return	undefined
**/
Template['components_about'].destroyed = function() {
	
};

/**
Template - components_about
{{getImageSource}}	
@return	String
**/
Template['components_about'].getImageSource = function(src) {
	// This gets automatically called when the window is resized.
	Dependencies.resizeDependency.depend();
	Dependencies.staticContentLoadedDependency.depend();
	return Helpers.getImageSource(src);
};

/**
Template - components_about
{{data}}	
@return	Meteor.Collection
**/
Template['components_about'].data = function() {
	return App.models.staticContent.findOne({"title": "about"});
};
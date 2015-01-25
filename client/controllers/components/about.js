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

Template['components_about'].helpers({

	getImageSource: function(src) {
		// This gets automatically called when the window is resized.
		Dependencies.resizeDependency.depend();
		Dependencies.staticContentLoadedDependency.depend();
		return Helpers.getImageSource(src);
	},
	data: function() {
		return App.models.staticContent.findOne({"title": "about"});
	}

});

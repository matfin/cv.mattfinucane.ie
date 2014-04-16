/**
Template - components_common_header
{{created}}	
@private
@return	undefined
**/
Template['components_common_header'].created = function() {
};

/**
Template - components_common_header
{{rendered}}	
@private
@return	undefined
**/
Template['components_common_header'].rendered = function() {
	
};

/**
Template - components_common_header
{{destroyed}}	
@private
@return	undefined
**/
Template['components_common_header'].destroyed = function() {
	
};

/**
Template - components_common_header
{{data}}	
@return	Meteor.Collection
**/
Template['components_common_header'].data = function() {
	return App.models.staticContent.findOne({'title':'contact'});
};
/**
Template - components_profile
{{created}}	
@private
@return	undefined
**/
Template['components_profile'].created = function() {
};

/**
Template - components_profile
{{rendered}}	
@private
@return	undefined
**/
Template['components_profile'].rendered = function() {
	
};

/**
Template - components_profile
{{destroyed}}	
@private
@return	undefined
**/
Template['components_profile'].destroyed = function() {
	
};

/**
Template - components_profile
{{data}}	
@return	Meteor.Collection
**/
Template['components_profile'].data = function() {
	return App.models.staticContent.findOne({'title':'profile'});
};
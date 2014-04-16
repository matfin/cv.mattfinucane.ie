/**
Template - components_interests
{{created}}	
@private
@return	undefined
**/
Template['components_interests'].created = function() {
};

/**
Template - components_interests
{{rendered}}	
@private
@return	undefined
**/
Template['components_interests'].rendered = function() {
	
};

/**
Template - components_interests
{{destroyed}}	
@private
@return	undefined
**/
Template['components_interests'].destroyed = function() {
	
};

/**
Template - components_interests
{{data}}	
@return	Meteor.Collection
**/
Template['components_interests'].data = function() {
	return App.models.staticContent.findOne({"title": "interests"});
};
/**
Template - components_experience
{{created}}	
@private
@return	undefined
**/
Template['components_experience'].created = function() {
};

/**
Template - components_experience
{{rendered}}	
@private
@return	undefined
**/
Template['components_experience'].rendered = function() {
	
};

/**
Template - components_experience
{{destroyed}}	
@private
@return	undefined
**/
Template['components_experience'].destroyed = function() {
	
};

/**
Template - components_experience
{{data}}	
@return	Meteor.Collection
**/
Template['components_experience'].data = function() {
	return App.models.staticContent.findOne({"title": "work-experience"});
};

/**
Template - components_experience
{{jobs}}	
@return	Meteor.Collection
**/
Template['components_experience'].jobs = function() {
	return App.models.experience.find({}).fetch();
};

/**
Template - components_experience
{{formattedDate}}	
@params String date, String format
@return	String
**/
Template['components_experience'].formattedDate = function(date, format) {
	return moment(date).isValid() ? moment(date).format(format) : date;
};
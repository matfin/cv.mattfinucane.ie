/**
Template - components_skills
{{created}}	
@private
@return	undefined
**/
Template['components_skills'].created = function() {
};

/**
Template - components_skills
{{rendered}}	
@private
@return	undefined
**/
Template['components_skills'].rendered = function() {
	
};

/**
Template - components_skills
{{destroyed}}	
@private
@return	undefined
**/
Template['components_skills'].destroyed = function() {
	
};

/**
Template - components_skills
{{skillsets}}	
@return	Meteor.Collection
**/
Template['components_skills'].helpers({
	skillsets: function() {
		return App.models.skills.find({}).fetch();
	},
	data: function() {
		return App.models.staticContent.findOne({'title':'skills'});
	}
});
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

Template['components_experience'].helpers({
	data: function() {
		return App.models.staticContent.findOne({"title": "work-experience"});
	},
	jobs: function() {
		return App.models.experience.find({}).fetch();
	},
	formattedDate: function(date, format) {
		return moment(date, 'YYYY-MM-DD').isValid() ? moment(date, 'YYYY-MM-DD').format(format) : date;
	}
});

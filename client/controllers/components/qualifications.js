/**
Template - components_qualifications
{{created}}	
@private
@return	undefined
**/
Template['components_qualifications'].created = function() {
};

/**
Template - components_qualifications
{{rendered}}	
@private
@return	undefined
**/
Template['components_qualifications'].rendered = function() {
	
};

/**
Template - components_qualifications
{{destroyed}}	
@private
@return	undefined
**/
Template['components_qualifications'].destroyed = function() {
	
};

Template['components_qualifications'].helpers({

	data: function() {
		return App.models.staticContent.findOne({"title": "qualifications"});
	},
	formattedDate: function(date, format) {
		return moment(date).isValid() ? moment(date).format(format) : date;
	}

});
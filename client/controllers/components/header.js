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

Template['components_common_header'].events = {
	'click button.nav': function(e, template) {
		$(e.target).toggleClass('revealed');
		$(template.find('nav')).toggleClass('revealed');
	},
	'click a': function(e, template) {
		$(e.target).removeClass('revealed');	
		$(template.find('nav')).removeClass('revealed');
	}
}
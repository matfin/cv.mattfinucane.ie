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
Helpers
**/
Template['components_common_header'].helpers({

	data: function() {
		return App.models.staticContent.findOne({'title':'contact'});
	}
});

// Reveal button function called by events
var revealNav = function(e, template) {
	$(e.target).toggleClass('revealed');
	$(template.find('nav')).toggleClass('revealed');
};

// Hide nav on button click
var clickNavLink = function(e, template) {
	$(e.target).removeClass('revealed');	
	$(template.find('nav')).removeClass('revealed');
};

Template['components_common_header'].events = {
	'click button.navButton': function(e, template) {
		if(Device.isTouchCapable) {
			e.preventDefault();
			return false;
		}
		else {
			revealNav(e, template);
		}
	},
	'click a': function(e, template) {
		clickNavLink(e, template);
	},
	'touchstart button.navButton': function(e, template) {
		revealNav(e, template);
	},
};
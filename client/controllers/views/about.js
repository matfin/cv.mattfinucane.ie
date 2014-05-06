/**
Template - views_about
{{created}}	
@private
@return	undefined
**/
Template['views_about'].created = function() {
};

/**
Template - views_about
{{rendered}}	
@private
@return	undefined
**/
Template['views_about'].rendered = function() {
	// Highlight the nav
	$('a[href*="about"]').addClass('active');
};

/**
Template - views_about
{{destroyed}}	
@private
@return	undefined
**/
Template['views_about'].destroyed = function() {
	// Remove nav highlight
	$('a[href*="about"]').removeClass('active');
};
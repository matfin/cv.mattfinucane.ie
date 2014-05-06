/**
Template - views_home
{{created}}	
@private
@return	undefined
**/
Template['views_home'].created = function() {
};

/**
Template - views_home
{{rendered}}	
@private
@return	undefined
**/
Template['views_home'].rendered = function() {
	// Highlight the nav
	$('a[href="/"]').addClass('active');
};

/**
Template - views_home
{{destroyed}}	
@private
@return	undefined
**/
Template['views_home'].destroyed = function() {
	// Remove nav highlight
	$('a[href="/"]').removeClass('active');
};
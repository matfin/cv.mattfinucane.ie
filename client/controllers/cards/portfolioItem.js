/**
Template - cards_portfolioitem
{{created}}	
@private
@return	undefined
**/
Template['cards_portfolioItem'].created = function() {
};

/**
Template - cards_portfolioitem
{{rendered}}	
@private
@return	undefined
**/
Template['cards_portfolioItem'].rendered = function() {
	
};

/**
Template - cards_portfolioitem
{{destroyed}}	
@private
@return	undefined
**/
Template['cards_portfolioItem'].destroyed = function() {
	
};

/**
Template - cards_portfolioitem
{{events}}
@return undefined
**/
Template['cards_portfolioItem'].events = {
	'click .content': function(e, template) {
		$(e.currentTarget).toggleClass('revealed');
	}
}
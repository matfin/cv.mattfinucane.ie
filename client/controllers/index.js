/**
Template - print
{{created}}	
@private
@return	undefined
**/
Template['print'].created = function() {
};

/**
Template - print
{{rendered}}	
@private
@return	undefined
**/
Template['print'].rendered = function() {
	// window.print();
};

/**
Template - print
{{destroyed}}	
@private
@return	undefined
**/
Template['print'].destroyed = function() {
	
};

Template['print'].events = {
	'mouseover': function() {
		// console.log('The mouse is over it');
	}
}
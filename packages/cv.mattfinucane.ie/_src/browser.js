/**
Checking browser support

@module browser
**/

/** 
Detect browser support

@class Browser
@static
**/
Browser = {
	isSupported: function() {
		var htmlElement = $('html');
		/**
		 *	For this app to work, these three features must at least be supported
		 */
		return htmlElement.hasClass('history') && htmlElement.hasClass('websockets') && htmlElement.hasClass('cssanimations');
	}
};
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

	uaBotRegex: [
		/^facebookexternalhit/i, 
		/^linkedinbot/i,
		/^twitterbot/i
	],

	isSupported: function() {
		var htmlElement = $('html');
		/**
		 *	For this app to work, these three features must at least be supported
		 */
		return htmlElement.hasClass('history') && htmlElement.hasClass('websockets') && htmlElement.hasClass('cssanimations');
	},
	isCrawler: function() {
		return (/\?.*_escaped_fragment_=/.test(window.location.href) || _.any(this.uaBotRegex, function(regex) {
			return regex.test(navigator.userAgent);
		}));	
	}
};
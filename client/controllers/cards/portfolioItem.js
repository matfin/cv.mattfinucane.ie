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
{{imageSource}}	
@return	String
**/
Template['cards_portfolioItem'].getImageSource = function() {
	// This gets automatically called when the window is resized.
	Dependencies.resizeDependency.depend();
	var imageSource;
	var windowWidth = $(window).width();

	//@hd 
	if(windowWidth >= 1280) {
		imageSource = this.media.img + '-d';
	}
	//@desktop
	else if(windowWidth < 1280 && windowWidth > 1024) {
		imageSource = this.media.img + '-d';
	}
	//@tablet
	else if(windowWidth <= 1024 && windowWidth > 640) {
		imageSource = this.media.img + '-t';
	}
	//@mobile
	else if(windowWidth <= 640) {
		imageSource = this.media.img + '-p';
	}

	if(App.isRetina) {
		return imageSource + '@2x.jpg';
	}
	else {
		return imageSource + '.jpg';
	}
};

/**
Template - cards_portfolioitem
{{events}}
@return undefined
**/
Template['cards_portfolioItem'].events = {
	'click': function() {
	}
};
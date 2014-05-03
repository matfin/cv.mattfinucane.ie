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
	$(this.find('a[rel="external"]')).attr('target', '_blank');
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

	//@hd 
	if(Device.isHD) {
		imageSource = this.media.img + '-d';
	}
	//@desktop
	else if(Device.isDesktop) {
		imageSource = this.media.img + '-d';
	}
	//@tablet
	else if(Device.isTablet) {
		imageSource = this.media.img + '-t';
	}
	//@mobile
	else if(Device.isMobile) {
		imageSource = this.media.img + '-p';
	}

	// Retina or not
	if(Device.isRetina) {
		return imageSource + '@2x.jpg';
	}
	else {
		return imageSource + '.jpg';
	}
};

/**
Template - cards_portfolioItem
{{formattedDate}}	
@params String date, String format
@return	String
**/
Template['cards_portfolioItem'].formattedDate = function(date, format) {
	return moment(date).isValid() ? moment(date).format(format) : date;
};

/**
Template - cards_portfolioitem
{{events}}
@return undefined
**/
Template['cards_portfolioItem'].events = {
	'click .toggleInfo': function(e, template) {
		$(template.find('.content')).toggleClass('revealed');
	}
};
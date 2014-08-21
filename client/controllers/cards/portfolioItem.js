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
	// Refresh the portfolio slider when the slides have rendered
	$('.portfolioSlider').iosSlider('update');
	$('.portfolioSlider').iosSlider('goToSlide', 1);
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

	if(this.media && this.media.img) {
		return Helpers.getImageSource(this.media.img);
	}
};

/**
Template - cards_portfolioItem
{{formattedDate}}	
@params String date, String format
@return	String
**/
Template['cards_portfolioItem'].formattedDate = function(date, format) {
	return moment(date, 'YYYY-MM-DD').isValid() ? moment(date, 'YYYY-MM-DD').format(format) : date;
};

/**
Template - cards_portfolioItem
{{formattedDate}}	
@params String date, String format
@return	String
**/
Template['cards_portfolioItem'].isMobile = function() {
	Dependencies.resizeDependency.depend();
	return Device.isMobile;
};

/**
Template - cards_portfolioitem
{{events}}
@return undefined
**/
Template['cards_portfolioItem'].events = {
};
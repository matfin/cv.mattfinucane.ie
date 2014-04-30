/**
Template - views_portfolio
{{created}}	
@private
@return	undefined
**/
Template['views_portfolio'].created = function() {
};

/**
Template - views_portfolio
{{rendered}}	
@private
@return	undefined
**/
Template['views_portfolio'].rendered = function() {
	// Prime the portfolio slider
	
	$('.portfolioSlider').iosSlider({
		desktopClickDrag: true,
		snapToChildren: true,
		keyboardControls: true,
		infiniteSlider: true,
		navPrevSelector: '.goLeft',
		navNextSelector: '.goRight',
		onSliderLoaded: function(args) {
		}
	});
};

/**
Template - views_portfolio
{{destroyed}}	
@private
@return	undefined
**/
Template['views_portfolio'].destroyed = function() {
	
};

/**
Template - views_portfolio
{{data}}	
@return	Meteor.Collection
**/
Template['views_portfolio'].data = function() {
	return App.models.staticContent.findOne({"title": "portfolio"});
};

/**
Template - views_portfolio
{{portfolioItems}}	
@return	Meteor.Collection
**/
Template['views_portfolio'].portfolioItems = function() {
	return App.models.portfolio.find({}).fetch();
};

/**
Template - views_portfolio
{{events}}	
@private
@return	undefined
**/
Template['views_portfolio'].events = {
	'click button': function(e, template) {
		var buttonIndex = typeof $(e.target).index() === 'number' ? $(e.target).index() + 1:0;
		$('.portfolioSlider').iosSlider('goToSlide', buttonIndex);
	}
};
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
		responsiveSlideContainer: true,
		responsiveSlides: true,
		navPrevSelector: '.goLeft',
		navNextSelector: '.goRight',
		onSliderLoaded: function(args) {
			setActiveSlideIndicator(args.currentSlideNumber);
		},
		onSlideChange: function(args) {
			setActiveSlideIndicator(args.currentSlideNumber);
		},
		onSliderUpdate: function(args) {
			setActiveSlideIndicator(args.currentSlideNumber);
		},
		onSliderLoaded: function(args) {
			setActiveSlideIndicator(args.currentSlideNumber);
		}
	});

	// Highlight the nav
	$('a[href*="portfolio"]').addClass('active');
};

var setActiveSlideIndicator = function(number) {
	this.$('button', '.sliderIndicator').removeClass('active');
	$('button', '.sliderIndicator').eq(number - 1).addClass('active');
};

/**
Template - views_portfolio
{{destroyed}}	
@private
@return	undefined
**/
Template['views_portfolio'].destroyed = function() {
	$('portfolioSlider').iosSlider('destroy');
	// Remove nav highlight
	$('a[href*="portfolio"]').removeClass('active');
};

Template['views_portfolio'].helpers({

	data: function() {
		return App.models.staticContent.findOne({"title": "portfolio"});
	},

	portfolioItems: function() {
		return App.models.portfolio.find({}).fetch();
	}

});



// Called by the sliderindicator button click/tap event
var goToSlide = function(e, template) {
	var buttonIndex = typeof $(e.target).index() === 'number' ? $(e.target).index() + 1:0;
	$('.portfolioSlider').iosSlider('goToSlide', buttonIndex);
};

/**
Template - views_portfolio
{{events}}	
@private
@return	undefined
**/
Template['views_portfolio'].events = {
	'click .sliderIndicator > button': function(e, template) {
		if(Device.isTouchCapable) {
			e.preventDefault();
			return false;
		}
		else {
			goToSlide(e, template);
		}		
	},
	'touchstart .sliderIndicator > button': function(e, template) {
		goToSlide(e, template);
	}
};
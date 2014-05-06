/**
Template - components_about
{{created}}	
@private
@return	undefined
**/
Template['components_about'].created = function() {
};

/**
Template - components_about
{{rendered}}	
@private
@return	undefined
**/
Template['components_about'].rendered = function() {
	
};

/**
Template - components_about
{{destroyed}}	
@private
@return	undefined
**/
Template['components_about'].destroyed = function() {
	
};

/**
Template - components_about
{{getImageSource}}	
@return	String
**/
Template['components_about'].getImageSource = function() {
	// This gets automatically called when the window is resized.
	Dependencies.resizeDependency.depend();
	Dependencies.staticContentLoadedDependency.depend();
	var imageSource;

	if(this.media && this.media.img) {
		//@hd 
		if(Device.isHD) {
			imageSource = this.media.img + '-d';
		}
		//@desktop
		if(Device.isDesktop) {
			imageSource = this.media.img + '-d';
		}
		//@tablets
		if(Device.isTablet) {
			imageSource = this.media.img + '-t';
		}
		//@mobile
		if(Device.isMobile) {
			imageSource = this.media.img + '-p';
		}

		// Retina or not
		if(Device.isRetina) {
			return imageSource + '@2x.jpg';
		}
		else {
			return imageSource + '.jpg';
		}
	}
};

/**
Template - components_about
{{data}}	
@return	Meteor.Collection
**/
Template['components_about'].data = function() {
	return App.models.staticContent.findOne({"title": "about"});
};
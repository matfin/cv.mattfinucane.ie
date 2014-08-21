/**
Contains Helpers for this app

@module Helpers
**/

/**
Data and models

@class Helpers
@static
**/

Helpers = {
	
	getImageSource: function(src) {
	
		var imageSource;

		if(src !== '') {
			//@hd 
			if(Device.isHD) {
				imageSource = src + '-d';
			}
			//@desktop
			if(Device.isDesktop) {
				imageSource = src + '-d';
			}
			//@tablets
			if(Device.isTablet) {
				imageSource = src + '-t';
			}
			//@mobile
			if(Device.isMobile) {
				imageSource = src + '-p';
			}

			// Retina or not
			if(Device.isRetina) {
				return imageSource + '@2x.jpg';
			}
			else {
				return imageSource + '.jpg';
			}
		}
	}
};
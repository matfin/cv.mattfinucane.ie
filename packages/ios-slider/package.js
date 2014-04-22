Package.describe({
	summary: "Touch Enabled, Responsive jQuery Horizontal Content Slider/Carousel/Image Gallery Plugin. For this project I have made this plugin into a Meteor package. I paid for this package and have the right to use it here. It is not to be redistributed withhout the consent of the original authors."
});

Package.on_use(function(api) {

	// api.export('Api');
	// api.export('$.fn.iosSlider');
	api.add_files('_lib/jquery-1.4.min.js', 'client');
	api.add_files('_lib/jquery-1.7.min.js', 'client');
	api.add_files('_lib/jquery-1.8.2.min.js', 'client');
	api.add_files('_lib/jquery.easing-1.3.js', 'client');
	api.add_files('_src/jquery.iosslider.min.js', 'client');
});
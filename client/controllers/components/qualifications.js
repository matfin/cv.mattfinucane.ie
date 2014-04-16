Template['components_qualifications'].created = function() {
};

Template['components_qualifications'].rendered = function() {
	
};

Template['components_qualifications'].destroyed = function() {
	
};

Template['components_qualifications'].data = function() {
	return App.models.staticContent.findOne({"title": "qualifications"});
};

Template['components_qualifications'].formattedDate = function(date, format) {
	return moment(date).isValid() ? moment(date).format(format) : date;
};
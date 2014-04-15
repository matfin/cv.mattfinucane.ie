Template['components_portfolio'].created = function() {
};

Template['components_portfolio'].rendered = function() {
	
};

Template['components_portfolio'].destroyed = function() {
	
};

Template['components_portfolio'].data = function() {
	return App.models.staticContent.findOne({"title": "portfolio"});
};

Template['components_portfolio'].portfolioItems = function() {
	return App.models.portfolio.find({}).fetch();
};
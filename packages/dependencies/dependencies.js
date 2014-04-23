/**
Contains Meteor Dependencies needed for this app.

@module app
**/

/**
Dependencies

@class Dependencies
@static
**/

Dependencies = {
	resizeDependency: new Deps.Dependency
}

/**
Events to call changes on dependencies
**/
$(window).on('resize', _.debounce(function() {
	Dependencies.resizeDependency.changed();
}, 500));


/**
Fetches json content and pushes it to the Meteor Collections.

@module api
**/

/** 
Data package wrapper

@class Api
@static
**/

Api = {
	fetch: function(model) {
		console.log('Fetching: ' + model);

		// Setting up a promise
		var deferred = Q.defer();

		$.ajax({
			type: 'GET',
			url: 'content/' + model + '.json',
			dataType: 'json'
			// Success
		}).done(function(result) {
			_.each(result.items, function(item, index) {
				item._display_index = index;
				App.models[model].insert(item);
			});
			// Resolve the promise
			deferred.resolve();
			// Fail
		}).fail(function(error) {
			// Reject the promise
			var errorMessage = {
				message: 'Cannot fetch ' + model + ' data',
				error: error
			};
			deferred.reject(errorMessage);
		});

		return deferred.promise;
	}
};
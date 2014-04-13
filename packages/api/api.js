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
		$.ajax({
			type: 'GET',
			url: App.baseUrl + 'content/' + model + '.json',
			dataType: 'json'
			// Success
		}).done(function(result) {
			_.each(result.items, function(item, index) {
				item._display_index = index;
				App.models[model].insert(item)
			});
			// Fail
		}).fail(function(error) {
			console.log('Cannot fetch ' + model + ' data', error);
		});
	}
};
/**
Contains collections and settings for this app

@module app
**/

/**
Data and models

@class app
@static
**/

App = {
	baseUrl: 'http://localhost:3000',

	models: {
		staticContent: new Meteor.Collection('staticContent', {connection: null}),
		skills: new Meteor.Collection('skills', {connection: null}),
		experience: new Meteor.Collection('experience', {connection: null}),
		portfolio: new Meteor.Collection('portfolio', {connection: null})
	}
}
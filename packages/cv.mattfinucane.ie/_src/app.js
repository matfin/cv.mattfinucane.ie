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
	baseUrl: 'http://localhost:3000/',
	mediaUrl: 'http://media.mattfinucane.com/',

	models: {
		staticContent: new Mongo.Collection('staticContent', {connection: null}),
		skills: new Mongo.Collection('skillsets', {connection: null}),
		experience: new Mongo.Collection('experience', {connection: null}),
		portfolio: new Mongo.Collection('portfolio', {connection: null}), 
		seo: new Mongo.Collection('seo', {connection: null})
	}
}
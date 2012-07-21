/**
 * Utility module to access mongodb
 */

var mongo = require('mongodb');
var config = require('./config');

var Db = function(){
};

var _server = null;
Db.prototype.server = function(){
	if(_server === null){
		_server = new mongo.Server(config.db.host);
	}
	return _server;
};

var _client = null;
Db.prototype.client = function(){
	if(_client === null){
		_client = new mongo.Db(config.db.name, _server);
	}
	return _client;
};

Db.prototype.collection = function(collection_name, callback){
	this.client().collection(collection_name, function(error, collection){
		if (error) {
			callback(error);
		}
		else{
			callback(null, collection);
		}		
	});
};


Db.prototype.save = function(collection, o, callback){
	this.collection(collection, function(error, collection){
		if (error) throw(error);
		collection.update({ _id:o._id }, o, {safe:true, upsert:true}, callback);
	});
};

exports.db = Db;
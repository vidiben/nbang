/**
 *	Very Lighteight implementation of persistance in mongo 
 */

var db = require('Db');

var Persistent = function(collection_name){
	this.__db_collection = collection_name;
};

Persistent.prototype.save = function(callback){
	db.save(this.__db_collection, this, callback);
};

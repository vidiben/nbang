/**
 * Abstract function - USed as prototype for any Attribute 
 */
var AttributeType = function(){
	// properties
	this.name 			= null;
	this.identifier 	= null;
};

AttributeType.prototype.save = function(callback){
	var db = require('../../db').Db;
	db.save('attribute_type', this, callback);
};


exports.AttributeType = AttributeType;
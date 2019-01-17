require('dotenv').config({ path: require('find-config')('.env') })
let model = require('../models/model.js');

// Database

var mongoose = require('mongoose');
Promise = require('bluebird');
mongoose.Promise = Promise;
var ObjectId = mongoose.Types.ObjectId;

var options = {
    user: process.env.MONGO_USERNAME,
    pass: process.env.MONGO_PASSWORD,
    useNewUrlParser: true,
};
console.log(options);
  
var mongooseConnectionString = 'mongodb://' + process.env.MONGO_IP + ":" + process.env.MONGO_PORT + '/' + process.env.MONGO_DBNAME +'?authSource=' + process.env.MONGO_AUTHSOURCE;
mongoose.connect(mongooseConnectionString,options);

function findAll(callback){
    console.log("FINDING...");
    model.find({}, callback);
}

function update(){

}

function wipe(callback){
    model.deleteMany({}, callback);
}

function insertMany(items, callback){
    model.insertMany(items, callback);
}

module.exports = {
    findAll: findAll,
    insertMany: insertMany,
    update: update,
    wipe: wipe,
};
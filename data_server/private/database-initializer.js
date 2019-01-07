require('dotenv').config({ path: require('find-config')('.env') })

var fs = require('fs');
var csv = require("fast-csv");

var stream = fs.createReadStream("./files/DiscMath_Database_Additions_-_Sheet1.csv");

let mongo = require('../config/mongo-config.js');

mongo.find();



let dataObjects = [];
let dataItems = [];
let studentList = "First Name,Last Name,Email\n";

var csvStream = csv()
    .on("data", function(data){
        dataObjects.push(data);
    })
    .on("end", function(){
        // Creates an array of dictionary objects for each data point
        let dataLen = dataObjects.length;
        let dataItem = {};
        for(var a = 1; a < dataLen; a++){
            dataItem = {};
            for(var b = 0; b < dataObjects[0].length; b++){
                // Make sure it's a non blank string
                if(dataObjects[0][b].length > 0)
                    dataItem[dataObjects[0][b]] = dataObjects[a][b];
            }
            dataItems.push(dataItem);
        }
        // console.log(dataItems);
    });
 
stream.pipe(csvStream);
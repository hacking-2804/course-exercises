require('dotenv').config()
var fs = require('fs');

// Server requires
var express = require('express');
var app = express();
var server = require('http').Server(app);

var cookieSession = require('cookie-session')
var flash = require("connect-flash");

// Additional requires
var favicon = require('serve-favicon');
const bodyParser = require("body-parser");
var path = require('path');

// Template System
var EJS = require('ejs');

// Cookies
var cookieParser = require('cookie-parser')
app.use(cookieParser());

app.set('trust proxy', 1) // trust first proxy --> Pulling ips through a reverse proxy
app.use(cookieSession({
    name: 'session',
    keys: ['Scholarpro || Application'],
}));

// COMPRESSION
// var minify = require('express-minify');
// app.use(minify());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Use EJS as our template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../public/views'));
app.set('partials', path.join(__dirname, '../public/views/partials'));


// Always print the path of request
app.use(function(req, res, next) { 
    console.log(req.path);
    next(); 
});


// Configurations for the dev environment
if (app.get('env') === 'development') {
    app.use("/css", express.static(__dirname + '/../css'));
    app.use("/js", express.static(__dirname + '/../js'));

    app.use("/img", express.static(__dirname + "/../public/img"));
    app.use("/logo", express.static(__dirname + "/../public/logo"));
    app.use("/ic", express.static(__dirname + "/../public/ic"));
    app.use("/bic", express.static(__dirname + "/../public/bic"));
    
    app.use("/chartist", express.static(__dirname + "/../node_modules/chartist"));
    app.use("/amcharts", express.static(__dirname + "/../js/amcharts"));
}

console.log(__dirname + '/../js');

// Load routes and pass in our app
require('../app/routes.js')(app);

function errorHandler (err, req, res, next) {
    res.status(500);
    res.render('pages/error/default', { error: err });
}

server.listen(4000, function() {
    console.log('Listening on port 8000');
});
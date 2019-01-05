const ROOT = "./public/";

// Template System
var EJS = require('ejs');
var STAPLE = require("../standard/staple.js");

var url = require('url');

// Additional requires
var fs = require('fs');
const requestIp = require('request-ip');
var favicon = require('serve-favicon');

// Hardcoded Database Simulation
// var scholarship = JSON.parse(fs.readFileSync('./hardcode/scholarship.json', 'utf8'));

// Microprocess interface
var data = require('../config/data-config.js');



// app/routes.js
module.exports = function (app) {
    // BEGIN SERVER ROUTES
    app.get('/', function (req, res) {
        console.log(req.cookies);
        res.render('pages/course/index', {
            page: 'index',
            course_selection: req.cookies.course_selection,
            page_title: "Discrete Mathematics Study Center",
        });
    });
    app.get('/notes', function (req, res) {
        res.render('pages/course/notes', {
            page: 'notes',
            course_selection: req.cookies.course_selection,
            page_title: "Course Notes",
        });
    });
    app.get('/exercises', function (req, res) {
        if(req.cookies.course_selection.localeCompare("COMP2804") === 0){
            return res.render('pages/courses/2804/exercises', {
                page: 'exercises',
                course_selection: req.cookies.course_selection,
                page_title: "2804 Exercises",
            });
        } else {
            return res.render('pages/courses/1805/exercises', {
                page: 'exercises',
                course_selection: req.cookies.course_selection,
                page_title: "1805 Exercises",
            });
        }
    });
    app.get('/mock', function (req, res) {
        res.render('pages/course/mock', {
            page: 'mock',
            course_selection: req.cookies.course_selection,
            page_title: "Mock Exam",
        });
    });
    app.get('/about', function (req, res) {
        res.render('pages/course/about', {
            page: 'about',
            course_selection: req.cookies.course_selection,
            page_title: "About",
        });
    });
};
/* Copyright (c) 2014 James Shore - See README for license */
"use strict";

var handlebars = require("handlebars");
var fs = require("fs");

exports.string = function(template, values) {
	return handlebars.compile(template)(values);
};

exports.file = function(filename, values) {
	var template = fs.readFileSync(filename, "utf8");
	return exports.string(template, values);
};
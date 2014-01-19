/* Copyright (c) 2014 James Shore - See README for license */
"use strict";

var handlebars = require("handlebars");

exports.string = function(template, values) {
	return handlebars.compile(template)(values);
};
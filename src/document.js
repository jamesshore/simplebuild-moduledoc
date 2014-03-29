// Copyright (c) 2014 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
"use strict";

// This module analyzes simplebuild modules and converts them human-readable documents.

var analyze = require("./analyze.js");
var interpolate = require("./interpolate.js");

var TEMPLATES = "./templates/";
var USAGE_SUMMARY = TEMPLATES + "usage_summary.handlebars";

exports.taskSummaries = function(module) {
	return interpolate.file(USAGE_SUMMARY, analyze.transformModule(module));
};
// Copyright (c) 2014 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
"use strict";

// This module analyzes simplebuild modules and converts them human-readable documents.

var path = require("path");
var analyze = require("./analyze.js");
var interpolate = require("./interpolate.js");

var TEMPLATES_DIR = thisDir() + "/../templates";
var README = TEMPLATES_DIR + "/readme.handlebars";
var USAGE_SUMMARY = TEMPLATES_DIR + "/usage_summary.handlebars";
var USAGE_DETAILS = TEMPLATES_DIR + "/usage_details.handlebars";

exports.readme = function(moduleDescriptors, module) {
	moduleDescriptors.usageSummary = exports.usageSummary(module);
	moduleDescriptors.usageDetails = exports.usageDetails(module);
	moduleDescriptors.examples = "(TO BE DONE)";

	return interpolate.file(README, moduleDescriptors);
};

exports.usageSummary = function(module) {
	return interpolate.file(USAGE_SUMMARY, analyzeModule(module));
};

exports.usageDetails = function(module) {
	return interpolate.file(USAGE_DETAILS, analyzeModule(module));
};

function thisDir() {
	return path.dirname(module.filename);
}

function analyzeModule(module) {
	return {
		task: analyze.transformModule(module)
	};
}
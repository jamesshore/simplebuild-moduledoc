// Copyright (c) 2014 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
"use strict";

// This module analyzes simplebuild modules and converts them human-readable documents.

var path = require("path");
var analyze = require("./analyze.js");
var interpolate = require("./interpolate.js");

var TEMPLATES_DIR = thisDir() + "/../templates";
var USAGE_SUMMARY = TEMPLATES_DIR + "/usage_summary.handlebars";
var README = TEMPLATES_DIR + "/readme.handlebars";

exports.readme = function(moduleDescriptors, module) {
	moduleDescriptors.usageSummary = exports.usageSummary(module);
	moduleDescriptors.usageDetails = "(TO BE DONE)";
	moduleDescriptors.examples = "(TO BE DONE)";

	return interpolate.file(README, moduleDescriptors);
};

exports.usageSummary = function(module) {
	return interpolate.file(USAGE_SUMMARY, {
		task: analyze.transformModule(module)
	});
};

function thisDir() {
	return path.dirname(module.filename);
}
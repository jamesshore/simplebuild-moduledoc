// Copyright (c) 2014 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
"use strict";

// This module parses options and writes the output file

var fs = require("fs");
var document = require("./document");

exports.createReadme = function createReadme(options, success, failure) {
	fs.writeFileSync(options.output, document.readme(options.descriptors, options.module), "utf8");

	return success();
};

exports.createReadme.descriptors = {
	title: "Create README",
	description: "Create a README file for a Simplebuild module. The text of the README is generated from the module's task descriptors."
};

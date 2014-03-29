// Copyright (c) 2014 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
"use strict";

// This module parses options and writes the output file

var fs = require("fs");
var document = require("./document");
var messages = require("./messages");

exports.createReadme = function createReadme(options, success, failure) {
	var output = options.output || "./README.md";
	if (typeof output !== "string") return failure(messages.OUTPUT_FILE_MUST_BE_STRING);

	fs.writeFileSync(output, document.readme(options.descriptors, options.module), "utf8");

	return success();
};

exports.createReadme.descriptors = messages.CREATE_README_DESCRIPTORS;

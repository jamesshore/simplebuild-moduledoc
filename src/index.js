// Copyright (c) 2014 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
"use strict";

// This module parses options and writes the output file

var fs = require("fs");
var document = require("./document");
var messages = require("./messages");

exports.createReadme = function createReadme(options, success, failure) {
	if (typeof options !== "object") return failure(messages.OPTIONS_MUST_BE_OBJECT);
	if (options === null) return failure(messages.OPTIONS_MUST_NOT_BE_NULL);

	var output = options.output || "./README.md";
	if (typeof output !== "string") return failure(messages.OUTPUT_FILE_MUST_BE_STRING);

	if (options.module === undefined) return failure(messages.NO_MODULE_OPTION);
	if (options.module === null) return failure(messages.MODULE_OPTION_MUST_NOT_BE_NULL);
	if (typeof options.module !== "object") return failure(messages.MODULE_OPTION_MUST_BE_OBJECT);

	fs.writeFileSync(output, document.readme(options.descriptors, options.module), "utf8");

	return success();
};

exports.createReadme.descriptors = messages.CREATE_README_DESCRIPTORS;

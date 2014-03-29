// Copyright (c) 2014 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
"use strict";

// Messages
exports.OPTIONS_MUST_BE_OBJECT = "Options parameter must be an object.";
exports.OPTIONS_MUST_NOT_BE_NULL = "Options parameter must not be null.";

exports.OUTPUT_FILE_MUST_BE_STRING = "Output file must be a string.";

exports.NO_MODULE_OPTION = "Need 'module' option containing the simplebuild module to document.";
exports.MODULE_OPTION_MUST_BE_OBJECT = "'module' option must be an object.";
exports.MODULE_OPTION_MUST_NOT_BE_NULL = "'module' option must not be null.";

exports.NO_DESCRIPTORS_OPTION = "Need 'descriptors' option describing the module to document.";
exports.DESCRIPTORS_OPTION_MUST_BE_OBJECT = "'descriptors' option must be an object.";
exports.DESCRIPTORS_OPTION_MUST_NOT_BE_NULL = "'descriptors' option must not be null.";

// Errors in module descriptors
exports.EMPTY_MODULE = "Module doesn't contain any task.";
exports.NO_SUCH_TASK = "Module doesn't contain requested task.";

exports.NO_TASK_DESCRIPTORS = "Task doesn't have any descriptors.";
exports.NO_TASK_DESCRIPTION = "Task doesn't have a description.";
exports.NO_TASK_OPTIONS = "Task doesn't have an option descriptor.";

exports.NO_OPTION_DESCRIPTION = "Option doesn't have a description.";

// Descriptors
exports.MODULE_DESCRIPTORS = {
	name: "moduledoc",
	summary: "Autogenerate README files for simplebuild modules.",
	description: "[Simplebuild](https://github.com/jamesshore/simplebuild) is a specification for universal JavaScript task automation. This module has tasks to help you generate README files and (eventually) other documentation. It takes advantage of standard Simplebuild descriptors so you don't have to repeat yourself.\n" +
		"\n" +
		"This README is an example of the output of this tool. It was generated from the descriptors in [messages.js](./src/messages.js).",
	copyright: "Copyright (c) 2014 James Shore"
};

exports.CREATE_README_DESCRIPTORS = {
	title: "Create README",
	description: "Create a README file for a Simplebuild module. The text of the README is generated from the module's task descriptors.",
	options: {
		output: {
			description: "Name of file to write README to. Defaults to `./README.md`."
		},
		module: {
			description: "The module to document. Must be a simplebuild module with task descriptors."
		},
		descriptors: {
			description: "Module descriptors: name, summary, description, and copyright. `name` is the npm name of the module. `summary` is a one-sentence description of the module. `description` is a paragraph describing the module that picks up where `summary` leaves off. `copyright` is the copyright; e.g., 'Copyright (c) 2014 James Shore.'"
		}
	}
};

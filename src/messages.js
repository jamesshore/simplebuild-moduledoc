// Copyright (c) 2014 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
"use strict";

// Messages
exports.OUTPUT_FILE_MUST_BE_STRING = "Output file must be a string.";
exports.NO_MODULE_OPTION = "Need 'module' option containing the simplebuild module to document.";
exports.MODULE_OPTION_MUST_NOT_BE_NULL = "'module' option must not be null.";
exports.MODULE_OPTION_MUST_BE_OBJECT = "'module' option must be an object containing task functions.";

// Errors
exports.EMPTY_MODULE = "Module doesn't contain any task.";
exports.NO_SUCH_TASK = "Module doesn't contain requested task.";
exports.NO_TASK_DESCRIPTORS = "Task doesn't have any descriptors.";
exports.NO_TASK_DESCRIPTION = "Task doesn't have a description.";

// Descriptors
exports.MODULE_DESCRIPTORS = {
	name: "moduledoc",
	summary: "Autogenerate README files for simplebuild modules.",
	description: "[Simplebuild](https://github.com/jamesshore/simplebuild) is a specification for universal JavaScript task automation. This module has tasks to help you generate README files and (eventually) other documentation. It takes advantage of standard Simplebuild descriptors so you don't have to repeat yourself.",
	copyright: "Copyright (c) 2014 James Shore"
};

exports.CREATE_README_DESCRIPTORS = {
	title: "Create README",
	description: "Create a README file for a Simplebuild module. The text of the README is generated from the module's task descriptors."
};

//exports.VALIDATION_FAILED = "JSHint failed.";
//exports.OPTIONS_MUST_BE_OBJECT = "Options parameter must be an object.";
//exports.OPTIONS_MUST_NOT_BE_NULL = "Options parameter must not be null.";
//exports.NO_FILES_OPTION = "Need 'files' option containing array of filenames (or globs) to check.";
//exports.NO_CODE_OPTION = "Need 'code' option containing source code to check.";
//
//// Generic descriptors
//var OPTIONS_DESCRIPTOR = {
//	description: "JSHint options (see [the JSHint documentation](http://www.jshint.com/docs/options/)).",
//	default: {}
//};
//var GLOBALS_DESCRIPTOR = {
//	description: "Global variables (equivalent to `options.globals`)",
//	default: {}
//};
//
//// File validator
//exports.FILE_VALIDATOR_DESCRIPTORS = {
//	title: "JSHint",
//	description: "Run JSHint against a list of files. A dot will be written to stdout for each file processed. Any errors will be written to stdout.",
//	options: {
//		files: {
//			description: "A string or array containing the files to check. Globs (`*`) and globstars (`**`) will be expanded to match files and directory trees respectively. Prepend `!` to exclude files.",
//		},
//		options: OPTIONS_DESCRIPTOR,
//		globals: GLOBALS_DESCRIPTOR
//	}
//};
//
//// Source validator
//exports.SOURCE_VALIDATOR_DESCRIPTORS = {
//	title: "JSHint",
//	description: "Run JSHint against raw source code. Any errors will be will be written to stdout.",
//	options: {
//		code: {
//			description: "A string containing the source code to check."
//		},
//		options: OPTIONS_DESCRIPTOR,
//		globals: GLOBALS_DESCRIPTOR
//	}
//};
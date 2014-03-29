// Copyright (c) 2014 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
"use strict";

// This module analyzes simplebuild modules (and tasks, etc.) and creates data structures that can be used
// in human-readable documentation.

var messages = require("./messages.js");

var SUMMARY_REGEX = /^(.*?[.!?])\s/;

exports.transformModule = function(module) {
	var tasks = Object.keys(module);
	if (tasks.length === 0) throw new Error(messages.EMPTY_MODULE);

	return tasks.map(exports.transformTask.bind(null, module));
};

exports.transformTask = function(module, key) {
	var task = safeGet(module[key], messages.NO_SUCH_TASK, key);
	var descriptors = safeGet(task.descriptors, messages.NO_TASK_DESCRIPTORS, key);
	var description = safeGet(descriptors.description, messages.NO_TASK_DESCRIPTION, key);
	var options = safeGet(descriptors.options, messages.NO_TASK_OPTIONS, key);

	return {
		name: key,
		summary: exports.summarizeDescription(description),
		description: description,
		signature: key + "(options, success, failure)",
		options: exports.transformOptions(options)
	};
};

exports.transformOptions = function(options, taskName) {
	return Object.keys(options).map(function(key) {
		var description = safeGet(options[key].description, messages.NO_OPTION_DESCRIPTION, taskName + ".options." + key);

		return {
			name: key,
			description: description
		};
	});
};

exports.summarizeDescription = function(description) {
	var match = SUMMARY_REGEX.exec(description);

	if (match) return match[1];
	else return description;
};

function safeGet(thing, error, key) {
	if (thing === undefined) throw new Error(error + " [" + key + "]");
	return thing;
}

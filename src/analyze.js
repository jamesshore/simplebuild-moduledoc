// Copyright (c) 2014 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
"use strict";

var messages = require("./messages.js");

var SUMMARY_REGEX = /^(.*?[.!?])\s/;

exports.transformModule = function(module) {
	var tasks = Object.keys(module);
	if (tasks.length === 0) throw new Error(messages.EMPTY_MODULE);

	return {
		task: tasks.map(exports.transformTask.bind(null, module))
	};
};

exports.transformTask = function(module, key) {
	var task = safeGet(module[key], messages.NO_SUCH_TASK);
	var descriptors = safeGet(task.descriptors, messages.NO_TASK_DESCRIPTORS);
	var description = safeGet(descriptors.description, messages.NO_TASK_DESCRIPTION);

	return {
		name: key,
		summary: exports.summarizeDescription(description),
		description: description
	};

	function safeGet(thing, error) {
		if (thing === undefined) throw new Error(error + " [" + key + "]");
		return thing;
	}
};

exports.summarizeDescription = function(description) {
	var match = SUMMARY_REGEX.exec(description);

	if (match) return match[1];
	else return description;
};
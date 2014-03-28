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
	var description = module[key].descriptors.description;

	var summary = exports.summarizeDescription(description);

	return {
		name: key,
		summary: summary,
		description: description
	};
};

exports.summarizeDescription = function(description) {
	var match = SUMMARY_REGEX.exec(description);

	if (match) return match[1];
	else return description;
};
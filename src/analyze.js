// Copyright (c) 2014 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
"use strict";

var messages = require("./messages.js");

exports.transformModule = function(module) {
	var tasks = Object.keys(module);
	if (tasks.length === 0) throw new Error(messages.EMPTY_MODULE);

	return {
		task: tasks.map(exports.transformTask.bind(null, module))
	};
};

exports.transformTask = function(module, key) {
	var descriptors = module[key].descriptors;
	return {
		name: key,
		description: descriptors.description
	};
};
// Copyright (c) 2014 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
"use strict";

var fs = require("fs");
var expect = require("chai").expect;
var moduledoc = require("./index.js");
var document = require("./document.js");

describe("moduledoc module", function() {
	var module = {
		foo: function() {},
		bar: function() {}
	};
	module.foo.descriptors = { description: "Foo summary" };
	module.bar.descriptors = { description: "Bar summary" };

	var moduleDescriptors = {
		name: "example-module",
		summary: "A short summary",
		description: "A detailed description",
		copyright: "Example copyright"
	};

	var successArgs;
	var failureArgs;

	beforeEach(function() {
		successArgs = null;
		failureArgs = null;
	});

	it("writes documentation to file", function() {
		var TEST_FILE = "./temp_files/readme.md";
		try {
			moduledoc.createReadme({
				module: module,
				descriptors: moduleDescriptors,
				output: TEST_FILE
			}, success, failure);
			expectSuccess();

			var expected = document.readme(moduleDescriptors, module);
			var actual = fs.readFileSync(TEST_FILE, "utf8");
			expect(expected).to.equal(actual);
		}
		finally {
			if (fs.existsSync(TEST_FILE)) fs.unlinkSync(TEST_FILE);
		}
	});

	it("defaults to writing to ./README.md", function() {
		var TEST_FILE = "./README.md";

		var cwd = process.cwd();
		process.chdir("./temp_files");
		try {
			moduledoc.createReadme({
				module: module,
				descriptors: moduleDescriptors
			}, success, failure);
			expectSuccess();

			var expected = document.readme(moduleDescriptors, module);
			var actual = fs.readFileSync(TEST_FILE, "utf8");
			expect(expected).to.equal(actual);
		}
		finally {
			if (fs.existsSync(TEST_FILE)) fs.unlinkSync(TEST_FILE);
			process.chdir(cwd);
		}
	});

	// TODO  it("fails appropriately when 'output' is not a string")
	// TODO  it("fails appropriately when 'module' not defined")
	// TODO  it("fails appropriately when 'descriptors' not defined")

	function success() {
		successArgs = Array.prototype.slice.call(arguments);
	}

	function failure() {
		failureArgs = arguments;
	}

	function expectSuccess() {
		if (successArgs === null) throw new Error("Expected success callback to be called");
		if (failureArgs !== null) throw new Error("Did not expect failure callback to be called");
		expect(successArgs).to.eql([]);
	}

	function expectFailure(failureMessage) {
		if (failureArgs === null) throw new Error("Expected failure callback to be called");
		if (successArgs !== null) throw new Error("Did not expect success callback to be called");
		expect(failureArgs).to.eql([ failureMessage ]);
	}

});
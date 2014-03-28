// Copyright (c) 2014 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.

// This module analyzes a simplebuild module and converts it to a data structure containing documentation strings.

"use strict";

var expect = require("chai").expect;
var analyze = require("./analyze.js");
var messages = require("./messages.js");

describe("Descriptor", function() {

	describe("transformModules", function() {
		it("transforms all tasks", function() {
			var module = {
				foo: function() {},
				bar: function() {},
				baz: function() {}
			};

			expect(analyze.transformModule(module)).to.deep.equal({
				task: [
					analyze.transformTask(module, "foo"),
					analyze.transformTask(module, "bar"),
					analyze.transformTask(module, "baz")
				]
			});
		});

		it("throws exception if module is empty", function() {
			var module = {};

			expect(function() {
				analyze.transformModule(module);
			}).to.throw(Error, messages.EMPTY_MODULE);
		});
	});

	// TODO: NEXT: Convert documentation to summary.

	describe("transformTask", function() {
		it("provides name", function() {

			expect(analyze.transformTask({}, "foo")).to.deep.equal({
				name: "foo"
			});
		});
	});
});
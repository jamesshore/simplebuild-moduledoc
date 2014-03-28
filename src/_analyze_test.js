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
				foo: createModule(),
				bar: createModule(),
				baz: createModule()
			};

			expect(analyze.transformModule(module)).to.deep.equal({
				task: [
					analyze.transformTask(module, "foo"),
					analyze.transformTask(module, "bar"),
					analyze.transformTask(module, "baz")
				]
			});

			function createModule() {
				var module = function() {};
				module.descriptors = {
					title: "Title",
					description: "Description"
				};
				return module;
			}
		});

		it("throws exception if module is empty", function() {
			var module = {};

			expect(function() {
				analyze.transformModule(module);
			}).to.throw(Error, messages.EMPTY_MODULE);
		});
	});


	describe("transformTask", function() {
		var module = {
			foo: {
				descriptors: {
					title: "Foo Task",
					description: "This documents the 'Foo' task. The first sentence is the summary."
				}
			}
		};

		it("translates module descriptors to documentation data structure", function() {
			expect(analyze.transformTask(module, "foo")).to.deep.equal({
				name: "foo",
				description: "This documents the 'Foo' task. The first sentence is the summary."
				// TODO: summary
				// more TBD
			});
		});

		// TODO: should error when task name doesn't exist

		// TODO: Thorough testing of summary logic

	});
});
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
					description: "Description."
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
				summary: "This documents the 'Foo' task.",
				description: "This documents the 'Foo' task. The first sentence is the summary."
				// more TBD
			});
		});

		// TODO: should error when task name doesn't exist
	});

	describe("summarizeDescription", function() {
		it("returns the entire description if there are no sentences", function() {
			expect(analyze.summarizeDescription("Foo")).to.equal("Foo");
		});

		it("returns the first sentence if there is just one sentence", function() {
			expect(analyze.summarizeDescription("A sentence.")).to.equal("A sentence.");
		});

		it("ignores spaces after the first sentence", function() {
			expect(analyze.summarizeDescription("A sentence.  ")).to.equal("A sentence.");
		});

		it("only captures the first sentence", function() {
			expect(analyze.summarizeDescription("A sentence. A second sentence.")).to.equal("A sentence.");
			expect(analyze.summarizeDescription("A sentence! A second sentence.")).to.equal("A sentence!");
			expect(analyze.summarizeDescription("A sentence? A second sentence.")).to.equal("A sentence?");
		});

		it("expects sentences to be followed by a space (so acronyms aren't captured)", function() {
			expect(analyze.summarizeDescription("Project G.O.A.T. It's weird.")).to.equal("Project G.O.A.T.");
			expect(analyze.summarizeDescription("What the #$!?@ is that? Nothing.")).to.equal("What the #$!?@ is that?");
			expect(analyze.summarizeDescription("A Dark!Harry fanfic. Not fit for human consumption.")).to.equal("A Dark!Harry fanfic.");
		});
	});
});
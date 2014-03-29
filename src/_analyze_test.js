// Copyright (c) 2014 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
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

			expect(analyze.transformModule(module)).to.deep.equal([
				analyze.transformTask(module, "foo"),
				analyze.transformTask(module, "bar"),
				analyze.transformTask(module, "baz")
			]);

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
		it("translates task descriptors", function() {
			var module = {
				foo: {
					descriptors: {
						title: "Foo Task",
						description: "This documents the 'Foo' task. The first sentence is the summary."
					}
				}
			};

			expect(analyze.transformTask(module, "foo")).to.deep.equal({
				name: "foo",
				summary: "This documents the 'Foo' task.",
				description: "This documents the 'Foo' task. The first sentence is the summary.",
				signature: "foo(options, success, failure)"
			});
		});

		it("throws exception if task doesn't exist", function() {
			expect(function() {
				analyze.transformTask({}, "foo");
			}).to.throw(Error, messages.NO_SUCH_TASK + " [foo]");
		});

		it("throws exception if task doesn't have descriptors", function() {
			expect(function() {
				analyze.transformTask({ foo: {} }, "foo");
			}).to.throw(Error, messages.NO_TASK_DESCRIPTORS + " [foo]");
		});

		it("throws exception if task doesn't have description", function() {
			expect(function() {
				analyze.transformTask({ foo: { descriptors: {} } }, "foo");
			}).to.throw(Error, messages.NO_TASK_DESCRIPTION + " [foo]");
		});
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
/* Copyright (c) 2014 James Shore - See README file for license */
"use strict";

var expect = require("chai").expect;

var interpolate = require("./interpolate.js");
var testFiles = require("./__test_files.js");

describe("Interpolator", function() {

	it("should use handlebars to interpolate templates", function() {
		var template = "Hi, I'm a {{something}}";
		var values = { something: "template" };

		expect(interpolate.string(template, values)).to.equal("Hi, I'm a template");
	});

	it("should load template from a file", function() {
		var template = "I'm in a {{something}}";
		var values = { something: "file" };

		testFiles.write(template, function(filenames) {
			expect(interpolate.file(filenames[0], values)).to.equal("I'm in a file");
		});
	});

});
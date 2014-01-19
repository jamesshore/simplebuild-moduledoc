/* Copyright (c) 2014 James Shore - See README file for license */
"use strict";

var expect = require("chai").expect;

var interpolate = require("./interpolate.js");

describe("Interpolator", function() {

	it("should use handlebars to interpolate templates", function() {
		var template = "Hi, I'm a {{something}}";
		var values = { something: "template" };

		expect(interpolate.string(template, values)).to.equal("Hi, I'm a template");
	});

});
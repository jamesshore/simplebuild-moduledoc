/* Copyright (c) 2014 James Shore - See README file for license */
"use strict";

var expect = require("chai").expect;

var interpolate = require("./interpolate.js");

describe("Interpolator", function() {

	it("should do nothing if template not present", function() {
		expect(interpolate.string("foo", {})).to.equal("foo");
	});

});
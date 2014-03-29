// Copyright (c) 2014 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
"use strict";

var expect = require("chai").expect;
var moduledoc = require("./index.js");

describe("moduledoc module", function() {
	var successArgs;
	var failureArgs;

	beforeEach(function() {
		successArgs = null;
		failureArgs = null;
	});

	it("writes documentation to file", function() {
		moduledoc.createReadme({

		}, success, failure);
		expectSuccess();
	});


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
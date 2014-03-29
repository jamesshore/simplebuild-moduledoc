// Copyright (c) 2014 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
"use strict";

var expect = require("chai").expect;
var document = require("./document.js");

describe("document", function() {
	var module = {
		foo: { descriptors: { description: "Foo summary" } },
		bar: { descriptors: { description: "Bar summary" } },
	};

//	it("readme analyzes module and interpolates it with 'readme' template", function() {
//		expect(document.readme(module)).to.equal("" +
//			"")
//	});

	it("taskSummaries analyzes module and interpolates it with 'usage summary' template", function() {
		expect(document.taskSummaries(module)).to.equal("" +
			"* `foo`: Foo summary\n" +
			"* `bar`: Bar summary\n\n"
		);
	});

//TODO	it("taskDetails analyzes module and interpolates it with 'usage details' template");

/*
{{#each task}}
# `{{signature}}`

{{documentation}}

* `options`: an object containing the following properties:
{{#each options}}
    * `{{name}}`: {{documentation}}
{{/each}}

* `success()`: called if `{{name}}` finishes successfully.

* `failure(message)`: called if `{{name}}` doesn't finish successfully. Detailed error messages (if any) are written to stdout and a summary error message is provided in the `message` parameter.

{{/each}}
 */
});
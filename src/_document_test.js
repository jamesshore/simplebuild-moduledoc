// Copyright (c) 2014 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
"use strict";

var expect = require("chai").expect;
var document = require("./document.js");

describe("template interpolation", function() {
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

	it("finds templates even if working directory has changed", function() {
		var cwd = process.cwd();
		var currentDir = document.usageSummary(module);
		var otherDir;
		try {
			process.chdir("temp_files");
			otherDir = document.usageSummary(module);
		}
		finally {
			process.chdir(cwd);
		}

		expect(currentDir).to.equal(otherDir);
	});

	it("readme", function() {
		expect(document.readme(moduleDescriptors, module)).to.equal("" +
			"# example-module\n" +
			"\n" +
			"A short summary\n" +
			"\n" +
			"A detailed description\n" +
			"\n" +
			"\n" +
			"## Installation\n" +
			"\n" +
			"This is a Node.js library. Install Node, then:\n" +
			"\n" +
			"`npm install example-module (add `--save` or `--save-dev` if you want)\n" +
			"\n" +
			"\n" +
			"## Usage\n" +
			"\n" +
			"This library provides these functions:\n" +
			"\n" +
			document.usageSummary(module) + "\n" +
			"\n" +
			"(TO BE DONE)\n" +
			"\n" +
			"\n" +
			"## Examples\n" +
			"\n" +
			"This library is designed to be easy to integrate with any task automation tool:\n" +
			"\n" +
			"(TO BE DONE)\n" +
			"\n" +
			"\n" +
			"## About Simplebuild\n" +
			"\n" +
			"This library is a simplebuild module. In addition to being used as a standalone library (as described above), it can also be used with simplebuild extensions and mappers. For more information about simplebuild, see [the Simplebuild GitHub page](https://github.com/jamesshore/simplebuild).\n" +
			"\n" +
			"\n" +
			"## License\n" +
			"\n" +
			"The MIT License (MIT)\n" +
			"\n" +
			"Example copyright\n" +
			"\n" +
			"Permission is hereby granted, free of charge, to any person obtaining a copy\n" +
			"of this software and associated documentation files (the \"Software\"), to deal\n" +
			"in the Software without restriction, including without limitation the rights\n" +
			"to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n" +
			"copies of the Software, and to permit persons to whom the Software is\n" +
			"furnished to do so, subject to the following conditions:\n" +
			"\n" +
			"The above copyright notice and this permission notice shall be included in\n" +
			"all copies or substantial portions of the Software.\n" +
			"\n" +
			"THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n" +
			"IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n" +
			"FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n" +
			"AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n" +
			"LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n" +
			"OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n" +
			"THE SOFTWARE.\n" +
			"\n"
		);
	});

//TODO	it("taskDetails analyzes module and interpolates it with 'usage details' template");

	it("usage summary", function() {
		expect(document.usageSummary(module)).to.equal("" +
			"* `foo`: Foo summary\n" +
			"* `bar`: Bar summary\n\n"
		);
	});

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
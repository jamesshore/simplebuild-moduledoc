# moduledoc

Autogenerate README files for simplebuild modules.

[Simplebuild](https://github.com/jamesshore/simplebuild) is a specification for universal JavaScript task automation. This module has tasks to help you generate README files and (eventually) other documentation. It takes advantage of standard Simplebuild descriptors so you don't have to repeat yourself.


## Installation

This is a Node.js library. Install Node, then:

`npm install moduledoc` (add `--save` or `--save-dev` if you want)


## Usage

This library exports this API:

* `createReadme`: Create a README file for a Simplebuild module.


### `createReadme(options, success, failure)`

Create a README file for a Simplebuild module. The text of the README is generated from the module's task descriptors.

* `options`: an object containing the following properties:
    * `output`: Name of file to write README to. Defaults to ./README.md.
    * `module`: The module to document. Must be a simplebuild module.
    * `descriptors`: Module descriptors: name, summary, description, and copyright. `name` is the npm name of the module. `summary` is a one-sentence description of the module. `description` is a paragraph describing the module that picks up where `summary` leaves off. `copyright` is the copyright; e.g., 'Copyright (c) 2014 James Shore.'

* `success()`: called if `createReadme` finishes successfully.

* `failure(message)`: called if `createReadme` doesn't finish successfully. Detailed error messages (if any) are written to stdout and a summary error message is provided in the `message` parameter.


## Examples

This library is designed to be easy to integrate with any task automation tool:

(TO BE DONE)


## About Simplebuild

This library is a simplebuild module. In addition to being used as a standalone library (as described above), it can also be used with simplebuild extensions and mappers. For more information about simplebuild, see [the Simplebuild GitHub page](https://github.com/jamesshore/simplebuild).


## License

The MIT License (MIT)

Copyright (c) 2014 James Shore

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


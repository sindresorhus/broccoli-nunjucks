'use strict';
var assert = require('assert');
var fs = require('fs');
var rimraf = require('rimraf');

afterEach(function () {
	rimraf.sync('temp');
});

it('should precompile Nunjucks templates', function () {
	assert(/"fixture\.html"/.test(fs.readFileSync('temp/fixture.js', 'utf8')));
});

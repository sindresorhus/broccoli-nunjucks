'use strict';
var assign = require('object-assign');
var Filter = require('broccoli-filter');
var nunjucks = require('nunjucks');

function NunjucksFilter(inputTree, options) {
	if (!(this instanceof NunjucksFilter)) {
		return new NunjucksFilter(inputTree, options);
	}

	Filter.call(this, inputTree);

	this.inputTree = inputTree;
	this.options = options || {};
}

NunjucksFilter.prototype = Object.create(Filter.prototype);
NunjucksFilter.prototype.constructor = NunjucksFilter;

NunjucksFilter.prototype.extensions = ['html'];
NunjucksFilter.prototype.targetExtension = 'js';

NunjucksFilter.prototype.processString = function (str, relativePath) {
	var opts = assign({}, this.options);
	opts.name = typeof this.options.name === 'function' && this.options.name(relativePath) || relativePath;
	return nunjucks.precompileString(str, opts);
};

module.exports = NunjucksFilter;

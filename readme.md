# [broccoli](https://github.com/joliss/broccoli)-nunjucks [![Build Status](https://travis-ci.org/sindresorhus/broccoli-nunjucks.svg?branch=master)](https://travis-ci.org/sindresorhus/broccoli-nunjucks)

> Precompile [Nunjucks](http://jlongster.github.io/nunjucks/) templates

*Issues with the output should be reported on the Nunjucks [issue tracker](https://github.com/jlongster/nunjucks/issues).*


## Install

```sh
$ npm install --save broccoli-nunjucks
```


## Usage

```js
var nunjucks = require('broccoli-nunjucks');
tree = nunjucks(tree, options);
```


## API

### nunjucks(tree, options)

Same options as [`nunjucks.precompile()`](http://jlongster.github.io/nunjucks/api.html#precompile) except for `name`.

#### options.name

Type: `function`  
Default: *Relative template path. Example: `templates/list.html`*

You can override the default behavior by supplying a function which gets the relative path and is expected to return the name.

Example:

```js
nunjucks(tree, {
	name: function (relativePath) {
		return 'tpl-' + relativePath;
	}
});
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)

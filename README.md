![Seneca](http://senecajs.org/files/assets/seneca-logo.png)
> A [Seneca.js][] plugin

# @seneca/pino-logger

| ![Voxgig](https://www.voxgig.com/res/img/vgt01r.png) | This open source module is sponsored and supported by [Voxgig](https://www.voxgig.com). |
|---|---|

## Install

```sh
npm install seneca-pino-logger
```

## Quick Example

```js
var Seneca = require('seneca')
var Pino = require('pino')
var pino = Pino()
var config = {legacy: {logging: false}, 'pino-logger': {instance: pino}}

var seneca = Seneca(config)
seneca.use('./pino')
```

## More Examples

See [test/](test/) for usage examples.

## Motivation

This module is a plugin that enables your Seneca-based microservice to use [Pino](https://github.com/mcollina/pino) as a logger.

## Support

If you're using this module and need help, you can:

- Post a [github issue][]
- Tweet to [@senecajs][]
- Ask on the [Gitter][gitter-url]

## API

### Configuration

Configuration parameters are passed into Seneca under the key `pino-logger`:

```js
var config = {legacy: {logging: false}, 'pino-logger': {config: {extreme: true}}}
```

All parameters are defined by [Pino](https://github.com/mcollina/pino).

## Contributing

The [Senecajs org][] encourages open participation. If you feel you can help in any way, be it with documentation, examples, extra testing, or new features please get in touch.

### Running tests

```sh
npm run test
```

## Background

Compatible with Seneca 3.0+ and Node 4.x+. Originally maintained by [David Gonzalez](https://github.com/dgonzalez), sponsored by [nearForm](http://www.nearform.com).

[![npm version][npm-badge]][npm-url]
[![Build Status][travis-badge]][travis-url]
[![Dependency Status][david-badge]][david-url]
[![Coveralls][BadgeCoveralls]][Coveralls]
[![Gitter][gitter-badge]][gitter-url]
[npm-url]: https://npmjs.com/package/seneca-pino-logger
[npm-badge]: https://img.shields.io/npm/v/seneca-pino-logger.svg
[travis-badge]: https://travis-ci.org/senecajs/seneca-pino-logger.svg
[travis-url]: https://travis-ci.org/senecajs/seneca-pino-logger
[david-badge]: https://david-dm.org/senecajs/seneca-pino-logger.svg
[david-url]: https://david-dm.org/senecajs/seneca-pino-logger
[Coveralls]: https://coveralls.io/github/senecajs/seneca-pino-logger?branch=master
[BadgeCoveralls]: https://coveralls.io/repos/github/senecajs/seneca-pino-logger/badge.svg?branch=master
[gitter-url]: https://gitter.im/senecajs/seneca-pino-logger
[gitter-badge]: https://badges.gitter.im/Join%20Chat.svg

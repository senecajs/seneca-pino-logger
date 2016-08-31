![Seneca](http://senecajs.org/files/assets/seneca-logo.png)
> A [Seneca.js](https://www.npmjs.com/package/seneca) logger for Pino

# seneca-pino-logger

[![npm version][npm-badge]][npm-url]
[![Build Status][travis-badge]][travis-url]
[![Dependency Status][david-badge]][david-url]
[![Coveralls][BadgeCoveralls]][Coveralls]
[![Gitter][gitter-badge]][gitter-url]


- __Lead Maintainer__: [David Gonzalez](https://github.com/dgonzalez)
- __Sponsor__: [nearForm](http://www.nearform.com)
- __node__: 4.x, 6.x

This module is a plugin that enables your Seneca-based microservice use [Pino](https://github.com/mcollina/pino)
as a logger.

### Seneca compatibility

Supports Seneca versions **3.x**

## Getting Started
This logger can be used in two ways:
- Passing an instance of Pino
- Passing the configuration to create an instance

Here is an example on how to use the logger passing an existing instance:
```
var Seneca = require('seneca')

var Pino = require('pino')
var pino = Pino()
var config = {legacy: {logging: false}, 'pino-logger': {instance: pino}}

var seneca = Seneca(config)

seneca.use('./pino')
```

And here is one example on how to use the logger passing the configuration:
```
var Seneca = require('seneca')

var Pino = require('pino')
var pino = Pino()
var config = {legacy: {logging: false}, 'pino-logger': {config: {extreme: true}}}

var seneca = Seneca(config)

seneca.use('./pino')
```

And that's all!

## Configuration

In order to configure the logger there is a number of configuration parameters that can be passed into Seneca in the key 'pino-logger'.

Those parameters are defined by [Pino](https://github.com/mcollina/pino).

## Compatibility

seneca-pino-logger is only compatible with Seneca 3.0+ and Node 4.x+

## Contributing

The [Senecajs org](https://www.npmjs.com/package/seneca) encourage open participation. If you feel you can help in any way, be it with
documentation, examples, extra testing, or new features please get in touch.

## License

Copyright (c) 2016, David Gonzalez and other contributors.
Licensed under [MIT](LICENSE).

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

'use strict'

var Pino = require('pino')

function Logger () {}

Logger.preload = function () {
  var seneca = this
  var options = seneca.options()
  var pino = options['pino-logger'] || { }

  var logger = pino.instance || Pino(pino.config)

  function adapter (context, payload) {
    logger.error(payload)
  }

  return {
    extend: {
      logger: adapter
    }
  }
}

module.exports = Logger

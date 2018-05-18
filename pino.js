'use strict'

var Pino = require('pino')

function Logger () {}

Logger.preload = function () {
  var seneca = this
  var options = seneca.options()
  var pino = options['pino-logger']

  var logger = pino.instance || Pino(pino.config)

  function adapter (context, payload) {
    payload.level = +logger.levels.values[payload.level] || 30;
    let fnName = logger.levels.labels[payload.level] || "info";
    logger[fnName](payload)
  }

  return {
    extend: {
      logger: adapter
    }
  }
}

module.exports = Logger

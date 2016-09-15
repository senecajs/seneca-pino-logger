'use strict'

var Pino = require('pino')
var LogFilter = require('seneca-log-filter')

function Logger () {}

Logger.preload = function () {
  var seneca = this
  var options = seneca.options()
  var pino = options['pino-logger']

  var logger = pino.instance || Pino(pino.config)
  var logFilter = LogFilter(options['log'])
  function adapter (context, payload) {
    let filtered = logFilter(payload)
    if (filtered) {
      logger.error(payload)
    }
  }

  return {
    extend: {
      logger: adapter
    }
  }
}

module.exports = Logger

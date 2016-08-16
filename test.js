var Seneca = require('seneca')

var Pino = require('pino')
var pino = Pino()
var config = {legacy: {logging: false}, 'pino-logger': {instancea: pino, config: {}}}


var seneca = Seneca(config)

seneca.use('./pino')


console.log(seneca.log)

seneca.listen()

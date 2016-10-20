'use strict'

// Load modules

const Code = require('code')
const Lab = require('lab')
const Pino = require('pino')
const Seneca = require('seneca')
const Logger = require('../')


const lab = exports.lab = Lab.script()
const describe = lab.describe
const it = lab.it
const expect = Code.expect


describe('Pino Logger', () => {
  it('can be loaded into seneca as a plugin', (done) => {
    const seneca = Seneca({legacy: {logging: false}, 'pino-logger': {config: {level: 'silent'}}})
    seneca.use(Logger)
    expect(seneca.log).to.exist()
    done()
  })

  it('will use existing pino instance if provided', (done) => {
    const pino = Pino({level: 'silent'})
    const seneca = Seneca({legacy: {logging: false}, 'pino-logger': {instance: pino}})
    seneca.use(Logger)
    expect(seneca.log).to.exist()
    done()
  })

  it('will allow absent pino-logger configuration', (done) => {
    const seneca = Seneca({legacy: {logging: false}})
    seneca.use(Logger)
    expect(seneca.log).to.exist()
    done()
  })
})

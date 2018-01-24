'use strict'
/* global describe, it */
const assert = require('assert')
const supertest = require('supertest')

describe('Public LambdaController', () => {
  let request, publicUser

  before((done) => {
    request = supertest('http://localhost:3000')
    publicUser = supertest.agent(global.app.packs.express.server)

    done()
  })

  it('should exist', () => {
    assert(global.app.api.controllers['LambdaController'])
  })

  it('should get lambda function on aws', (done) => {
    publicUser
      .post('/api/v1/lambda/test')
      .expect(200)
      .end((err, res) => {
        console.log(res)
        done(err)
      })
  })
})

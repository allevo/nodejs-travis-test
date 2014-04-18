var assert = require('assert')
var request = require('request')
var app = require('../app')


describe('prova', function() {
  beforeEach(function(done) {
    this.server = app.listen(3009, done)
  })
  afterEach(function(done) {
    this.server.close(done)
  })

	it('/', function(done) {

    request.get('http://localhost:3009', function(err, response, body) {
      assert.deepEqual({ pippo: 1 }, JSON.parse(body))
      done()
    })
	})
})
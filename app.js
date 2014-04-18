#!/bin/env node

var express = require('express')
var app = express()

app.get('/', function(req, res) {
  res.json(200, { pippo: 1 })
})

if (require.main === module) {
  app.listen('3001', function() {
      console.log('start on http://localhost:3001')
  })
}

module.exports = app
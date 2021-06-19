const express = require('express')

const path = require('path')

const server = express()

//Middleware 
server.use(express.static(path.join(__dirname + 'public')))
server.use(express.urlencoded({ extended: true }))

//Exports
module.exports = server 



//Routes
// const routes = require('../routes')
// server.use('/', routes)
const express = require('express')
const path = require('path')

const server = express()

//Middleware 
server.use(express.static(path.join(__dirname + 'public')))
server.use(express.urlencoded({ extended: true }))
server.use(express.json())

//Exports
module.exports = server 



//Routes
const routes = require('./routes/routes')
server.use('/', routes)
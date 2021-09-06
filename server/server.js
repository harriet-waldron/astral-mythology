const express = require('express')
const path = require('path')

const server = express()

// const skyRoutes = require('./routes/routes')

//Middleware 
server.use(express.static(path.join(__dirname + 'public')))
server.use(express.urlencoded({ extended: true }))
server.use(express.json())

//Exports

//server.use('/api/v1')
server.get('/', function(req, res) {res.sendFile(path.join(__dirname + '/public/index.html')); });

// .get('/', (req, res) => {
//   res.redirect('index.html')
// })
//Routes
// const routes = require('./routes/routes')
// server.use('/', routes)
module.exports = server 
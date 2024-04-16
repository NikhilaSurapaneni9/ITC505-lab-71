const express = require('express')
const logger = require('morgan')
const path = require('path')
const server = express()

server.use(express.urlencoded({'extended': true}))
server.use(logger('dev'))

// Routes
server.get('/do_a_random', (req, res) => {
  res.send(`Your number is: ${Math.floor(Math.random() * 100) + 1}`)
})

// Setup static page serving for all the pages in "public"
const publicServedFilesPath = path.join(__dirname, 'public')
server.use(express.static(publicServedFilesPath))

// Set the port to 8080
const port = 8080

server.listen(port, () => console.log('Ready on localhost!'))

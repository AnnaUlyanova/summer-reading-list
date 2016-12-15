var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')

var index = require('./index')
var routes = require('./routes')

var server = express()

module.exports = server

// Middleware

server.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main.hbs'
}))

server.set('view engine', 'hbs')
server.set('views', path.join(__dirname, 'views'))

server.use(express.static('public'))
server.use(bodyParser.urlencoded({ extended: true }))

//Routes

server.get('/', routes.getBookList)
//server.get('/reading-list', routes.getReadingList)
server.get('/notes', routes.getNotes)
server.post('/', routes.addBook)
server.post('/add-book', routes.addToMyList)

var path = require('path')
var express = require('express')
var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var knex = require('knex')(config)


var db = require('./db.js')

module.exports = {
  getBookList: getBookList,
  getReadingList: getReadingList,
  getNotes: getNotes,
  addBook: addBook
}

function cleanText (text) {
  return text.toLowerCase()
}

function getBookList(req, res) {
  db.getBooks()
    .then (function (books) {
      if (req.query.search) {
        var search = cleanText(req.query.search)
        books = books.filter(function (book) {
          var found = false
          found = cleanText(book.title).includes(search) || cleanText(book.author).includes(search)
          return found
        })
      }
      var data = {
        books: books
      }
      res.render('books', data)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function addBook (req, res) {
  var book = {
    title: req.body.title,
    author: req.body.author,
    image: req.body.image,
    description: req.body.description
  }
  db.insertBook(book)
  .then( () => {
    res.redirect('/')
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}


function getReadingList(req, res) {
  res.render('list', {})
}

function getNotes (req, res) {
  res.render('notes', {})
}

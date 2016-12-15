var path = require('path')
var express = require('express')
var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var knex = require('knex')(config)


var db = require('./db.js')

module.exports = {
  getBookList: getBookList,
  getReadingList: getReadingList,
  getNotes: getNotes
}

function getBookList(req, res) {
    db.getBooks()
    .then(function (books) {
      res.render('books', {books: books})
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

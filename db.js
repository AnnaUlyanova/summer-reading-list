var express = require('express')
var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var connection = require('knex')(config)

module.exports = {
  getBooks: getBooks,
  insertBook: insertBook
}

function getBooks () {
  return connection('books')
}

function insertBook (book) {
  return connection('books')
  .insert({title: book.title, author: book.author, image: book.image, description: book.description})
}

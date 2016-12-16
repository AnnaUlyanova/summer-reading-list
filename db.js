var express = require('express')
var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var connection = require('knex')(config)

module.exports = {
  getBooks: getBooks,
  insertBook: insertBook,
  updateListed: updateListed,
  listedBooks: listedBooks,
  listedToFalse: listedToFalse
}

function getBooks () {
  return connection('books')
}

function insertBook (book) {
  return connection('books')
  .insert({title: book.title, author: book.author, image: book.image, description: book.description})
}

//Change listed to true
function updateListed(id) {
  return connection('books')
  .where("id", id)
  .update('listed', true)
}

function listedBooks () {
  return connection('books')
  .select('books.title', 'books.author')
  .where('listed', true)

}

//Change listed to false
function listedToFalse () {
  return connection('books')
  .select('books.title', 'books.author')
  .update('listed', false)
}

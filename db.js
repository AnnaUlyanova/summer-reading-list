var express = require('express')
var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var connection = require('knex')(config)

module.exports = {
  getBooks: getBooks,
  insertBook: insertBook,
  updateListed: updateListed,
  listedBooks: listedBooks,
  listedToFalse: listedToFalse,
  insertNote: insertNote,
  loadNotes: loadNotes
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

//Change listed to false
function listedToFalse (id) {
  return connection('books')
  .where("id", id)
  .update('listed', false)
}


function listedBooks () {
  return connection('books')
  .select('books.title', 'books.author', 'books.id')
  .where('listed', true)
}

function insertNote (note) {
  return connection('notes')
  .insert({comments: note.comments, book_id: note.book_id})
}

function loadNotes() {
  return connection('notes')
}

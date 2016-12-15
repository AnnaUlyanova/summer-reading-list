var path = require('path')
var express = require('express')

var db = require('./db.js')

module.exports = {
  getBookList: getBookList,
  getReadingList: getReadingList,
  getNotes: getNotes
}

function getBookList(req, res) {
  res.render('books', {})
}

function getReadingList(req, res) {
  res.render('list', {})
}

function getNotes (req, res) {
  res.render('notes', {})
}

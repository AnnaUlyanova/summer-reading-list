var path = require('path')
var express = require('express')

var db = require('./db.js')

module.exports = {
  getBookList: getBookList
}

function getBookList(req, res) {
  res.render('books', {{}})
}
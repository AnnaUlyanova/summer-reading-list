
exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', function (table) {
    table.increments('id').primary()
    table.string('comments')
    table.string('book_id').references('books.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('notes')
};

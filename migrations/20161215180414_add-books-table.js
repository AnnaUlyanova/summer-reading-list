
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function (table) {
    table.increments('id').primary()
    table.string('title')
    table.string('author')
    table.string('image')
    table.text('description')
    table.boolean('listed')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books')
};

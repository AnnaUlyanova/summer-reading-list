
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('notes').insert({id:1, comments: 'Really Great I like it', book_id:2}),
        knex('notes').insert({id:2, comments: 'You should learn how to write', book_id:3}),
        knex('notes').insert({id:3, comments: 'One more episode please, I can\'t wait to see it colapsing', book_id:4}),
        knex('notes').insert({id:4, comments: 'The author was on crack and cocaine', book_id:20}),
        knex('notes').insert({id:5, comments: 'He was also a pedophile', book_id:20})
      ]);
    });
};

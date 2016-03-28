
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function(table) {
      table.increments('id');
      table.string('title');
      table.string('genre');
      table.text('coverImgUrl');
      table.text('description');
      table.integer('author_id');
      table
        .foreign('author_id')
        .references('id')
        .inTable('authors');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books');
};

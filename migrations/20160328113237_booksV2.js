
exports.up = function(knex, Promise) {
    return knex.schema.createTable('books', function(table) {
      table.increments('id');
      table.string('title');
      table.string('genre');
      table.text('coverImgUrl');
      table.text('description');
      table.integer('author_one');
      table
        .foreign('author_one')
        .references('id')
        .inTable('authors');
      table.integer('author_two');
      table
        .foreign('author_two')
        .references('id')
        .inTable('authors');
      table.integer('author_three');
      table
        .foreign('author_three')
        .references('id')
        .inTable('authors');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books');
};


exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', function(table) {
      table.increments('id');
      table.string('first_name');
      table.string('last_name');
      table.text('portraitUrl');
      table.text('bio');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authors');
};

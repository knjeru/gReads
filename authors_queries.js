var knex = require('./db/knex.js');

function Books() {
  return knex('authors')
}

module.exports = {
    test: 'test'
}

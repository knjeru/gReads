var knex = require('./db/knex');

function Books() {
  return knex('books');
}

module.exports = {
    getAllBooks: function() {
        return Books();
    },
    getABook: function(id) {
        return Books()
                .where('id', id);
    },
    addBook: function(body) {
        return Books()
                .insert({
                   title: body.title,
                   genre: body.genre,
                   coverImgUrl: body.coverImgUrl,
                   description: body.description,
                   author_one: body.author_one,
                   author_two: body.author_two,
                   author_three: body.author_three
                });
    },
    updateBook: function(id, body) {
        return Books
                .where('id', id)
                .update({
                   title: body.title,
                   genre: body.genre,
                   coverImgUrl: body.coverImgUrl,
                   description: body.description,
                   author_one: body.author_one,
                   author_two: body.author_two,
                   author_three: body.author_three
                });
    },
    deleteBook: function(id) {
        return Books
                .where('id', id)
                .del();
    }
}

var knex = require('./db/knex');

function Author() {
  return knex('authors');
}

module.exports = {
    getAllAuthors: function() {
        return Author();
    },

    getAuthor: function(id) {
        return Author()
                .where('id', id);
    },

    addAuthor: function(body) {
        return Author()
                .insert({
                   first_name: body.first_name,
                   last_name: body.last_name,
                   portraitUrl: body.portraitUrl,
                   bio: body.bio,
                });
    },

    updateAuthor: function(id, body) {
        return Author()
                .where('id', id)
                .update({
                   first_name: body.first_name,
                   last_name: body.last_name,
                   portraitUrl: body.portraitUrl,
                   bio: body.bio,
                });
    },
    
    deleteAuthor: function(id) {
        return Author()
                .where('id', id)
                .del();
    }
};

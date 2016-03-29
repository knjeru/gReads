var express = require('express');
var router = express.Router();
var query = require('../../../authors_queries.js');


router.get('/', function(req,res,next) {
  query.getAllAuthors()
    .then(function(data) {
      res.json(data);
    })
    .catch(function(err) {
      if(err) {
          res.status(500);
      }
    });
});

router.get('/:id', function(req,res,next) {
  query.getAuthor(req.params.id)
    .then(function(data) {
      res.json(data);
    })
    .catch(function(err) {
      if(err) {
          res.status(500);
      }
    });
});

router.post('/new', function(req,res,next) {
  query.addAuthor(req.body)
    .then(function(data) {
        res.json({
            message: 'success'
        });
    })
    .catch(function(err) {
      if(err) {
          res.status(500);
      }
    });
});

router.put('/:id/edit', function(req,res,next) {
  query.updateAuthor(req.params.id, req.body)
    .then(function(data) {
        res.json({
            message: 'success'
        });
    })
    .catch(function(err) {
        res.status(500);
    });
});

router.delete('/:id/delete', function(req,res,next) {
  query.deleteAuthor(req.params.id)
    .then(function(data) {
        res.json({
            message: 'success'
        });
    })
    .catch(function(err) {
        res.status(500);
    });
});

module.exports = router;

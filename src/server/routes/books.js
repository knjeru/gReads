var express = require('express');
var router = express.Router();
var query = require('../../../book_queries.js');

router.get('/', function(req,res,next) {
  query.getAllBooks()
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
  query.getABook(req.params.id)
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
  query.addBook(req.body)
  .then(function(data) {
    res.status(200);
  })
  .catch(function(err) {
    if(err) {
        res.status(500);
    }
  });
});

router.put('/:id/edit', function(req,res,next) {
  query.updateBook(req.params.id, req.body)
  .then(function(data) {
    res.status(200);
  })
  .catch(function(err) {
    if(err) {
        res.status(500);
    }
  });
});

router.delete('/:id/delete', function(req,res,next) {
  query.deleteBook(req.params.id)
  .then(function(data) {
    res.status(200);
  })
  .catch(function(err) {
    if(err) {
        res.status(500);
    }
  });
});

module.exports = router;
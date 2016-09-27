'use strict';

var express = require('express');
var controller = require('./book.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/isbn/:isbn', controller.showByIsbn);
router.post('/', controller.save);


module.exports = router;
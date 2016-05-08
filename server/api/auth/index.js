var router = require('express').Router();
var controller = require('./auth.controller.js');

module.exports = router;

router.get('/', controller.index);
router.get('/callback', controller.callback);

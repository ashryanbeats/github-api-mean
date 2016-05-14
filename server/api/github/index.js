var router = require('express').Router();
var controller = require('./github.controller.js');

module.exports = router;

router.get('/user', controller.user);
router.get('/user/repos', controller.repos);
router.get('/user/commits', controller.commits);
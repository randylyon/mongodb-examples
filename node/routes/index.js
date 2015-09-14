var express = require('express');
var router = express.Router();
var dogController = require('../controllers/dog.js');

router.get('/', function(req, res) {
  res.send('Hello Universe');
});

router.get('/dogs', dogController.list);
router.post('/dogs', dogController.save);
router.get('/dogs/:id', dogController.get);

module.exports = router;
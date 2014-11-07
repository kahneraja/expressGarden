var express = require('express');
var router = express.Router();

/* GET play page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

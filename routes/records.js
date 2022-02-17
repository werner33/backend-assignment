var express = require('express');
var router = express.Router();

const colors = require('../data/colors.json');

/* GET home page. */
router.get('/', function(req, res) {
  
  let data = {}

  
  res.json(data)
});

module.exports = router;

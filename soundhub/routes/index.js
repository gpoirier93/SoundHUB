var express = require('express');
var request = require('request');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('*', function(req, res, next) {
  res.render('home.ejs');
});

router.get('/callback', function(req, res, next) {
  res.render('callback');
});

module.exports = router;

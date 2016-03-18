var express = require('express');
var request = require('request');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/highlights', function(req, res, next) {
  res.end();
});

// router.get('/highlights', function(req, res, next) {
//   res.render('highlights');
// });

/* GET home page. */
router.get('/views/*', function(req, res, next) {
  var url = req.originalUrl;
  if (url === '/views/navBar.ejs') {
    res.render('navBar');
  } else if (url === '/views/unauthenticated.ejs') {
    res.render('unauthenticated');
  } else if (url === '/views/highlights.ejs') {
    res.render('highlights');
  } else {
    res.render('error');
  }
});

router.get('/connect', function(req, res, next) {
  // // https://soundcloud.com/connect?&display=popup&redirect_uri=http://127.0.0.1:3000/callback&response_type=code_and_token&scope=non-expiring&state=SoundCloud_Dialog_d4645
  // var param = {
  //   client_id: '3246c29fb8e8276c21a11fb2143ce568',
  //   display: 'popup',
  //   redirect_uri: 'http://127.0.0.1:3000/callback',
  //   response_type: 'token'
  // };
  //
  // request({
  //   uri: 'https://www.soundcloud.com/connect',
  //   method: 'GET',
  //   qs:param
  // }, function(error, response, body) {
  //   console.log(body);
  // });
});

router.get('/callback', function(req, res, next) {
  res.render('callback');
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

// Renders the Ads page
router.get('/ads', function(req, res, next) {
  res.render('ads', { title: 'Ads' });
});

module.exports = router;


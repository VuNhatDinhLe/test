var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});
router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Products' });
});
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

module.exports = router;

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about_me', function(req, res, next) {
  res.render('about_me', { title: 'Express' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Express' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Express' });
}); 

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

module.exports = router;

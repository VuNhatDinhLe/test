const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about_me', function(req, res, next) {
  res.render('about_me', { title: 'About Me' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

router.get('/project_java', function(req, res, next) {
  res.render('project_java', { title: 'Project Java' });
});

router.get('/project_csharp', function(req, res, next) {
  res.render('project_csharp', { title: 'Project CSharp' });
});

router.get('/project_design', function(req, res, next) {
  res.render('project_design', { title: 'Project Design' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
}); 

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;

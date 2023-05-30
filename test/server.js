var express = require('express');
var app = express();
app.use('/', function(req, res) {
res.send('Hello World 2');
});
app.listen(3000);
console.log('Server running at http://localhost:3000/');
module.exports = app;

var express = require('express');
var app = express();
app.use(express.static(__dirname + '/assets'));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  return res.render('index');
});
app.get('/about', function (req, res) {
  return res.render('about');
});
app.get('/contact', function (req, res) {
  return res.render('contact');
});
app.get('/work', function (req, res) {
  return res.render('work');
});

app.listen(3032, function () {
  console.log('Example app listening on port 3000!');
});

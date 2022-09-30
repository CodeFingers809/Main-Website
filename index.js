const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5050;

//index
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'website/index.html'));
});
//css
app.get('/style', function(req, res) {
  res.sendFile(path.join(__dirname, 'website/style.css'));
});
//logo
app.get('/logo', function(req, res) {
  res.sendFile(path.join(__dirname, 'assets/logo.jpg'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);
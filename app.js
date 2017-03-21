var express = require('express');
var path = require('path');

var port = process.env.PORT || 4000;
var app = express();

app.use(express.static('public'));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'pubic', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(port, function () {
  console.log('app listening on port  ' + port);
});


module.exports = app;

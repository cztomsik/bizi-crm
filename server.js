var express = require('express');
var api = require('./api');

var app = express();

app.use('/api', api);
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/build'));

app.listen(process.env.PORT || 5000);

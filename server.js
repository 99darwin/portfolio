var express = require('express');

var app = express();
var PORT = process.env.PORT || 1500;

app.listen(PORT, function() {
    console.log('App listening on port: ' + PORT);
});
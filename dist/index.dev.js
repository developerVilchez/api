"use strict";

var express = require('express');

var app = express();
var PORT = process.env.PORT || 4001;
app.listen(PORT, function () {
  console.log("listen ".concat(PORT));
});
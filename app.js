var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const fs = require('fs');
const rateLimit = require("express-rate-limit");
const port = process.env.PORT || 3030;

var byPostCode = require('./routes/by-postcode');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//instantiate rate limit
const limiter = rateLimit({
  windowMs: 15 * 1000, // 15 seconds
  max: 5 // limit each IP to 100 requests per windowMs
});
app.use(limiter);


app.use('/api/search', byPostCode);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;

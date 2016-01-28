var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var _ = require('lodash');
var eventsRouter = require('./routers/events-router');

var app = express();

app.use(morgan('dev'));
app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/events', eventsRouter);

app.listen(4000);
console.log("Running app on port 4000. Visit: http://localhost:4000/");


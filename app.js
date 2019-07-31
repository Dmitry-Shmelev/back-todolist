const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


var routes = require('./routes/index');
var user = require('./routes/user');
var list = require('./routes/list');
var task = require('./routes/task');


app.use('/', routes);
app.use('/user', user);
app.use('/list', list);
app.use('/task', task);


module.exports = app;

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config/development');
var path = require('path');

//Getting data from POST requests
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

//For CORS requests
app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

//Connecting MongoDB
mongoose.connect(config.mongo.database);

//Setting up directory for frontend to utilise
app.use(express.static(__dirname+'/../client'));

//For Seeding Sample Data
if (config.seedDB) {
    console.log('Seeding DB');
    require('./config/seed');
}

//Configuring for route dir
require('./routes')(app);

// Running the server
app.listen(config.port);
console.log('Server running on port'+config.port);
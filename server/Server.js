/**
 * Created by lizwestberg on 1/15/16.
 */
var express = require('express');
var index = require('./routes/index');

//var mongoose = require('mongoose');

//var mongoURI = 'mongodb://localhost:27017/angular_services';
//var mongoDB = mongoose.connect(mongoURI).connection;

var app = express();

app.use(express.static('server/public'));

//mongoDB.on('error', function(err){
//    console.log(err);
//});
//
//mongoDB.once('open', function(){
//    console.log('Connected to MongoDB');
//});

app.use('/', index);

app.get('/getMyThing', function(request, response){
   response.send("This works?")
});

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Listening on port', port);
});
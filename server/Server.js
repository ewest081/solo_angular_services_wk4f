/**
 * Created by lizwestberg on 1/15/16.
 */
var express = require('express');
var index = require('./routes/index');

var app = express();

app.use(express.static('server/public'));

app.use('/', index);

app.set("port", process.env.PORT || 3000);

var server = app.listen(app.get('port'), function(){
    var port = server.address().port;
    console.log("Listening on port" + app.get('port'));
});

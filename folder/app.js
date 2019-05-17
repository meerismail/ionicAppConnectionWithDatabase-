var express = require('express');
var app = express();
var http=require('http');
var cors = require('cors');
var bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb', extended: true}));


app.use(cors());

app.use(express.static(__dirname + '/public'));

app.use('/api',require('./controllers'))
app.set('port', 3300);
http.createServer(app).listen(app.get('port'), function(){
console.log('Express server listening on port ' + app.get('port'));
});
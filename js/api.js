var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var cities = [{name:'İstanbul', country:'Turkey'}];

var app = express()

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(3000, function(){
    console.log('Port dinleniyor.');
})

app.get('/api/cities', function(request, response){
    response.send(cities);
});
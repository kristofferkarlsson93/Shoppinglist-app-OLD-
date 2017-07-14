/**
 * Created by Kristoffer on 2017-07-06.
 */

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');
var db = require('./db');

app.use(bodyParser.json());

app.get('/', function (request, response) {
    console.log("hej");
    response.end();
}),

app.post('/insert/:item', function (request, response) {
    console.log(request.body.name);
    db.insertItem(request.body.name);
    response.end();
}),


app.delete('/delete/:id', function (request, response) {
    console.log(request.body.id);
    db.deleteItem(request.body.id);
    response.end();
})

app.get('/getshoppinglist', function (request, response) {
    db.getAllItems(function (result, items) {
        console.log("Result: " + items);
        response.setHeader('Content-Type', 'application/json');
        response.send(items);
        response.end();
    });
})

app.listen(8080);
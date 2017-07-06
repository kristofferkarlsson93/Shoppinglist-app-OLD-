/**
 * Created by Kristoffer on 2017-07-06.
 */

var express = require('express');
var app = express();
var mysql = require('mysql');
var db = require('./db');

app.get('/', function (request, response) {
    console.log("hej");
})

app.get('/insert', function (request, response) {
    db.insertItem(request.query.item);
})

app.get('/delete', function (request, response) {
    //tbc
})

app.get('getshoppinglist', function (request, response) {
    //tbc;
})

app.listen(8080);
var express = require('express');
var mysql = require ('mysql');
var app = express();

var pool = mysql.createPool({
//properties...
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sampleDB'
})

pool.getConnection(function(error){
    if (!!error){
        console.log('Error');
        }
    else{
        console.log('Connected');
    }
});

app.get('/', function(req, resp) {
    pool.query("SELECT * FROM mySampleTable", function (error, rows, field){
    if (!!error){
        console.log('Error in the query');
    } else {
        console.log('SUCCESS');
    }
});
})

app.listen(1361);
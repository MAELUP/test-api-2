var express = require('express');
var app = express();
var fs = require("fs"); //read user.json

//get all user
app.get('/getUsers', function(req, res){
    fs.readFile( __dirname + "/" + "user.json", 'utf8' , function (err,data){
	console.log(data);
	res.end(data);
    });
});

//get user  by id
app.get('/getUsers/:id', function(req, res){
    fs.readFile( __dirname + "/" + "user.json", 'utf8' , function (err,data){
	var users = JSON.parse( data );
	var user = users["user" + req.params.id]
        console.log(data);
	res.end(JSON.stringify(user));
    });
});

app.post('/addUser', function(req, res){
    fs.readFile( __dirname + "/" + "user.json", 'utf8',function(err,data){
        data = JSON.parse(data); 
        data["user4"] = user["user4"]; // add data from local var  
	console.log(data);
	res.end(JSON.stringify(data)); 
    });
});

app.delete('/delUser/:index', function(req, res){
    fs.readFile( __dirname + "/" + "user.json", 'utf8',function(err,data){
        data = JSON.parse(data); 
        delete data["user" + req.params.index] // del data by id  
	console.log(data);
	res.end(JSON.stringify(data)); 
    });
});


var user = {
    "user4" : {
	"name" : "kongruksiam",
	"password" : "5555",
	"profession" : "programmer",
	"id" : 4 
    }
}

var server = app.listen(8081,function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Application Run At http://%s:%s",host,port)
});


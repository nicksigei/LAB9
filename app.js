var express=require('express');
var app=express();
var bodyparser=require('body-parser');
var mongoose=required ('mongoose');

mongoose.connect;("mongodb://<nsigei>:<Motigo.355>@ds057476.mlab.com:57476/lab8");
var db ;mongoose.connection;
app.get('/l', function (req, res){
	res.send('hello mongo');
});
app.listen(3000);
console.log('Running on 3000...');
var express = require('express');
var app = express();

app.get('/', function(res, res){
	res.send('Hello AWS');
});

app.listen(3000, function(err, sucess) {
	console.log(sucess, err);
});
/******************************
	
*******************************/
module.exports = function() {
	
	var module = {};
	var express = require('express');
	var http = require('http');
	var https = require('https');
	var spa = require('express-spa');
	var app = express();
	var bodyParser = require('body-parser');
	
	// post parms
	app.use(bodyParser.json()); // support json encoded bodies
	app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
	
	// serve directory on any port
	module.startServer = function(dir, port) {
		app.use(express.static(dir)); // dir to serve
		var server = app.listen(port, function () {
		   var host = server.address().address
		   var port = server.address().port
		   console.log('Server listening at http://%s:%s', host, port)
		});
	}

	// test data
	var transaction_history = [

	]
  
	// get
	app.get('/api/:object/:filter?',function(req, res){
		var parms = req.params
		var data = []
		if(parms.object == 'transactions'){
			if(parms.filter){
				data = transaction_history.filter(function(tran) {
					return tran.ticker == parms.filter;
				})
				res.send(data)
			}else{
				res.send(transaction_history)
			}
		}
	})
	
	// create
	app.post('/api/:object/',function(req, res){
		var body = req.body
		var parms = req.params
		if(parms.object == 'transactions'){
			body.uuid = uuid() // get unique id for transaction
			transaction_history.push(body)
			res.send("success")
		}
	})
	
	// update
	app.put('/api/:object/:pk',function(req, res){
		res.send("test response")
	})
	
	// delete 
	app.delete('/api/:object/:pk',function(req, res){
		res.send("test response")
	})

	function uuid() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		  var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		  return v.toString(16);
		});
	}
	
	return module;
};

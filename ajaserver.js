// Shoes Serever


var http = require("http");
var url = require('url');
var fs = require("fs");
// var path = require('path');

	http.createServer(function (req, res) {

		var parUrl = url.parse(req.url, true);
		var filePath = '.' + parUrl.pathname;


		console.log(xhttp.send);
		


		if(parUrl.pathname === ('/')){
			fs.readFile("ajax.html", function (err, content) {
			res.writeHead(200, { 'Content-Type': "text/html" });
			res.end(content);
		});
		}
	 //   else if (parUrl.pathname === ('/Flown.css')){
		// fs.readFile("Flown.css", function(err, content){
		// 	res.writeHead(200, {'content-Type': "text/css"});
		// 	res.end(content);
		// });
	    // }
	    else if (parUrl.pathname === ('/ajaxGET.js')){
	    fs.readFile("ajaxGET.js", function(err, content){
	    	res.writeHead(200, {'content-Type': "application/javascript"});
	    	res.end(content);
	    });
	    }

	
	})
	.listen(8080, function () {
			console.log("Listening on Port: "+ 8080);
		});
 





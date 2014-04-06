/**
* learnyounode 7 of 13
* http client
*
* in:
*	[url]
*
* return:
* 	[string content of earch data event]
**/

var http = require('http')		// import http module
var url = process.argv[2]
	
var rec = http.get(url, function(res) {	// get from url
	res.setEncoding('utf8');	// set to string output
	var str = ""			// return string
	res.on('data', function (chunk) {	// call lines
		str += chunk
		if(chunk != "")			// add newlines
			str += '\n'
	});
	res.on('end', function() {
		console.log(str)		//print
	});
});
rec.on('error', function(e) {
	console.log('error:' + e.message)
});

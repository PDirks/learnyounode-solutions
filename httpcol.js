/**
* learnyounode 8 of 13
* http collect
* 
* return:
* 	[number of characters received]
* 	[complete string]
**/

var http = require('http')

http.get(process.argv[2], function(res) {
	var cc = 0			// holds count of characters
	var str = ""			// total string
	res.setEncoding('utf8')
	res.on('data', function(chunk) {
		cc += chunk.length
		str += chunk
	})
	res.on('end', function(e) {
		console.log(cc+ '\n' + str) 
	})
})

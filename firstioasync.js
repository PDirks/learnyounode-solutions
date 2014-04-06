/**
* learnyounode 4 of 13
* First Async I/O
*
* similar to cat [file] | wc -l
*
* in:
*	[reads file]
*
* return:
* 	[number of newlines]
**/

var fs = require('fs')
var content
fs.readFile(process.argv[2], function read(err, data){
	if(err) throw err
	console.log(data.toString().split('\n').length - 1)

});



/**
* learnyounode 5 of 13
* Filtered LS
* in:
*	[file directory to search], [file type]
*
* return:
* 	[list of matches]
**/

var fs = require('fs')
var content
if(process.argv.length < 3)
	exit()
var dir = process.argv[2]
var ext = '.' + process.argv[3]

var path = require('path')

fs.readdir(dir, function callback(err, list){
	if (err) throw err;
	var pattern = new RegExp(ext)
	for(var i=0;i<list.length;i++){
		if(list[i].match(pattern))
			console.log(list[i])
	}
});

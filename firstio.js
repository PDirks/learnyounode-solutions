/**
* learnyounode 3 of 13
* First I/O
*
* similar to cat [file] | wc -l
*
* in:
*	[reads file]
*
* return:
* 	[number of newlines]
**/
//load fs module from library
var fs = require('fs')
//allows for filesystem operations

//opens sync file
var buff = fs.readFileSync(process.argv[2])
//console.log(process.argv[2])

var delim = '\n'
var str = buff.toString()

var res = str.split(delim)

console.log(res.length - 1)

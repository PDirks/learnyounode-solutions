/**
* learnyounode 11 of 13
* FileServer
* in:
*	[port to listen to], [location of file to serve]
*
* return:
* 	[file]
**/

var net = require('http')			// creating an http server, not tcp
var fs = require('fs')

var server = net.createServer(function(req, resp){			// create server
	var rstm = fs.createReadStream(process.argv[3]).pipe(resp)	// create read stream representing file to be loaded
									// pipe the loaded file to the http response stream
})
server.listen(process.argv[2])

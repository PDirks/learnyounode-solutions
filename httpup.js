/**
* learnyounode 12 of 13
* HTTPup
* in:
*	[POST command]
*
* return:
* 	[command in upper case]
**/
var net = require('http')				// needed for http server
var map = require('through2-map')			// neened for map wrapper

upper = map(function(chunk){
	return chunk.toString().toUpperCase()		// works as wrapper for streams, preforms operation on stream
})

var server = net.createServer(function(req, resp){
	if( req.method == 'POST' ){			// check if req is of POST method via '.method' 
		req.pipe(upper).pipe(resp)		// req is piped to 'upper' wrapper, which is then processed, then finally piped to response
	}
})
server.listen(process.argv[2])


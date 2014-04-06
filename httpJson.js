/**
* learnyounode 13 of 13
* HTTP JSON server
* 
* Returns JSON data when recieving get requests in path '/api/parsetime'
*
* in:
*	[get request]
*
* return:
* 	[json data]
**/

var net = require('http')				// needed for http server
var url = require('url')				// needed to parse incoming url

var server = net.createServer(function(req, resp){
	parsurl = url.parse(req.url,true)		// true to parse with 'query string'
							// create 'parsurl' object that cuts up url, see below for parse example...
	if(parsurl.pathname == '/api/parsetime'){
		d = new Date(parsurl.query.iso)
		var jOut = {				// format if parsetime requested
			hour: d.getHours(),
			minute: d.getMinutes(),
			second: d.getSeconds()
		}
	}
	else if(parsurl.pathname == '/api/unixtime'){
		var jOut = {				// format if unixtime requested
			unixtime: (new Date(parsurl.query.iso)).getTime()
		}
	}
	
	if(jOut){					// if everything is good, set Content Type as 200
		resp.writeHead(200, {"Content-Type": "application/json"})
		resp.end(JSON.stringify(jOut))
	}
	else{						// if bad result set Content type as 404
		resp.writeHead(404)
		resp.end()
	}
	
})
server.listen(process.argv[2])



/**
* parse of: '/api/parsetime?iso=2013-08-10T12:10:15.474Z'
*	
*	protocol: null,
*	slashes: null,
*	auth: null,
*	host: null,
*	port: null,
*	hostname: null,
*	hash: null,
*	search: '?iso=2013-08-10T12:10:15.474Z',
*	query: { iso: '2013-08-10T12:10:15.474Z' },
*	pathname: '/api/parsetime',
*	path: '/api/parsetime?iso=2013-08-10T12:10:15.474Z',
*	href: '/api/parsetime?iso=2013-08-10T12:10:15.474Z' }
**/

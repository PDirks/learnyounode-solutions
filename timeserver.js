/**
* learnyounode 10 of 13
* TimeServer
* in:
*	[port to listen to]
*
* return:
* 	[date/time of server?] (2013-07-06 07:42)
**/
var net = require('net')

function pad(n){			// pad funciton to make output look pretty
	if(n < 10) return '0' + n
	else	return n
}

var server = net.createServer( function (socket) {	// create server
	var d = new Date()
	var s = d.getFullYear()+'-'			// grab time info from server, throw in string
		+ pad(d.getMonth() + 1)+'-'
		+ pad(d.getDay() - 1)+' '
		+ (d.getHours())+':'
		+ pad(d.getMinutes()+'\n')
	socket.end(s)					//can alternaly use write() to write data to socket		
})
server.listen(process.argv[2])				


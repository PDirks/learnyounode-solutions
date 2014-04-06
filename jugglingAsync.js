/**
* learnyounode 9 of 13
* Juggling Async
* in:
*	[3 urls]
*
* return:
* 	[strings from urls]
**/
var urls = [ process.argv[2], process.argv[3], process.argv[4] ]
var http = require('http')
var count = 1
var holder = []
var end = 0

for(var i in urls){
	resCount(i, urls[i])
}

function resCount(count, url){
	http.get(url, function(res) {
		res.setEncoding('utf8')
		var str = ""
		res.on('data', function(chunk) {
			str += chunk
		})
		res.on('end', function(e) {
			holder[count] = str
			end ++				// bump when done
			console.log('url '+count+' done\n')
			if(end >= 3) 			// waits for all urls to finish, then print
				for(var i in holder)
					console.log(holder[i])
		})
	})
}

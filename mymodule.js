/**
* learnyounode 6 of 13
* Make it Modular
*
* module file that does all the work  
*
**/
var fs = require('fs')

//exports funciton - function to be activated when module is called on from outside
module.exports = function (dir, filter, callback){
	var regex = new RegExp('\\.'+filter); 	// use regExp object to define and build pattern to search for later
	fs.readdir(dir, function(err, list){	// reads directory [directory to read], [callback: err and return list 'files]
		if (err) return callback(err)	// if err exists, return
		var filteredFiles = [];		// blank array to filter files to
		
		list.forEach(function (file){	// cycle though 
			if(regex.test(file)) 	//calls regEx test method on every entry in the files list, if match, true
				filteredFiles.push(file)	// push adds file to filteredFiles array
		});
		return callback(null, filteredFiles)	//JS's way to return things, [err is null], [return array]
	});
}

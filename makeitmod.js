/**
* learnyounode 6 of 13
* Make it Modular
*
*  same as filtered ls but w/ modules
*
* in:
*	[file directory to search], [file type]
*
* return:
* 	[list of matches]
**/
var mymodule = require('./mymodule.js'), //loads mymodule module
	dir=process.argv[2],		 //assigns dir from 2nd arg
	filterText = process.argv[3];	 //assigns filter from 3rd arg
	
//call mymodule function, places results in var 'data'
mymodule(dir, filterText, function(err,data){
	if(err){
		console.log(err)
		return;
	}
	//print out results in data array
	for(i=0;i<data.length;i++)
		console.log(data[i])
});


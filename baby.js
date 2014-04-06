/**
* learnyounode 1 of 13
* BabySteps
* in:
*	[two numbers to add]
*
* return:
* 	[sum]
**/
var index
var sum = 0
for(index = 2; index < process.argv.length; index++){
	sum += Number(process.argv[index])
}
console.log(sum)

//console.log(Number(process.argv[2]))



var string = "my name is jayson";

var strArray = string.split(" ");


for(var i = 0;i < strArray.length;i++){

	strLength.push(strArray[i].length)

}

function maxStrLength(strLength){


	
	return Math.max.apply(null,strLength);

}

var stringIndex = strLength.indexOf(maxStrLength(strLength));


console.log(strArray[stringIndex]);


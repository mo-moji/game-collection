
//buttons
var button1 = document.getElementById("button-1");
var button2 = document.getElementById("button-2");
var button3 = document.getElementById("button-3");
var button4 = document.getElementById("button-4");
var button5 = document.getElementById("button-5");
var button6 = document.getElementById("button-6");
var button7 = document.getElementById("button-7");
var button8 = document.getElementById("button-8");
var button9 = document.getElementById("button-9");
var button0 = document.getElementById("button-0");
var buttonAdd = document.getElementById("button-add");
var buttonSubtr = document.getElementById("button-subtr");
var buttonMultiply = document.getElementById("button-multiply");
var buttonDivide = document.getElementById("button-divide");
var buttonEquals = document.getElementById("button-equals");
var buttonClear = document.getElementById("button-clear");
var buttonDelete = document.getElementById("button-delete");
var screen = document.getElementById("screen");
var total = document.getElementById("total");

button1.addEventListener('click',function(){number(1)});
button2.addEventListener('click',function(){number(2)});
button3.addEventListener('click',function(){number(3)});
button4.addEventListener('click',function(){number(4)});
button5.addEventListener('click',function(){number(5)});
button6.addEventListener('click',function(){number(6)});
button7.addEventListener('click',function(){number(7)});
button8.addEventListener('click',function(){number(8)});
button9.addEventListener('click',function(){number(9)});
button0.addEventListener('click',function(){number(0)});
buttonAdd.addEventListener('click',function(){numberAdd()});
buttonSubtr.addEventListener('click',function(){numberSubtr()});
buttonMultiply.addEventListener('click',function(){numberMultiply()});
buttonDivide.addEventListener('click',function(){numberDivide()});
buttonEquals.addEventListener('click',function(){numberEquals()});
buttonClear.addEventListener('click',function(){numberClear()});
buttonDelete.addEventListener('click',function(){numberDelete()});

screen.value = "";
var numString = "";

function number(a){
	numString = numString + a;
	screen.value = numString;
	console.log(numString);
 
}

function numberAdd(){
	numString = numString + "+";
	screen.value = numString;
}
function numberSubtr(){
	numString = numString + "-";
	screen.value = numString;
}
function numberMultiply(){
	numString = numString + "*";
	screen.value = numString;
}
function numberDivide(){
	numString = numString + "/";
	screen.value = numString;
}

function numberEquals(){
	total.value = eval(numString);
}
function numberClear(){
	screen.value = " ";
	numString = "";
	total.value = " ";
}

function numberDelete(){

	numString = numString.slice(0,numString.length-1);
	screen.value = numString;
}


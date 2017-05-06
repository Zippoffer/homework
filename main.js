

'use strict'

var display = document.getElementById("display");
var inputBox = document.getElementById("inputBox");
var outputBox = document.getElementById("outputBox");


function parse(){
	var word = display.value
  outputBox.value = word.replace(/\•/g, '');
}

inputBox.onkeyup = function(){

	var x = ' ••• •••••'
	var o = inputBox.value
	
    document.getElementById('display').innerHTML = x+x+x+x+x+x+x+x+x+x+x+x+x
    +x+x+x+x+x+x+x+x+o+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x+x
    +x+x+x+x+x+x
}

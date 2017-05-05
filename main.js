'use strict'

	  var display = document.getElementById("display");
	  var inputBox = document.getElementById("inputBox");
	  var outputBox = document.getElementById("outputBox");


  function parse(){
	  var parsedWord = String.fromCharCode(parseInt(inputBox.value,16));
		var string = inputBox.value;
	  // var parsedWord = inputBox.value;
	  // var parsedWord = String.fromCharCode(inputBox.value);
	  outputBox.value = parsedWord
		// for (var i = 0; i < string.length; i++) {
		// 	display.value = string.charCodeAt(i++)
	 //  	console.log("test", string.charCodeAt(i));

		// }
// for (let j = 0; j < 100; j++) {
// 	display.value = (j)
// 	console.log('this is this', display.value)
// }
  }

inputBox.onkeyup = function(){
	var k = "••••••"
	var o = inputBox.value

    document.getElementById('display').innerHTML = k+k+k+k+k+k+k+k+k+k+k+k+k
    +k+k+k+k+k+k+k+k+k+k+k+k+k+k+k+k+k+k+k+k+k+k+k+k+k+k+k+k+o+k+k+k+k+k+k+k
    +k+k+k+k+k+k+k+k+k+k+k+k+k+k+k+k+k+k+k+k+k+k+k+k+k+k+k+k+k+k+k+k+k+k+k+k
    

}


//buttons
var guessButton = document.getElementById('guessButton');
var resetButton = document.getElementById('resetButton');
var clearButton = document.getElementById('clearButton');

// input
var userInput = document.getElementById('userInput');

// global variables
var startNum = 1;
var endNum = 100;
var targetNum = Math.floor((Math.random() * endNum) + startNum);
var userNum = "";


guessButton.addEventListner('click',function(){
  userNum = parseInt(userInput.value);
});

if (userNum === targetNum){

}else if (userNum<targetNum) {

}else {
  
}


console.log(targetNumber);
console.log(userNum);

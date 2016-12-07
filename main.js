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
var lastGuess = document.querySelector('.lastGuess');
var guessTitle = document.querySelector('.guessTitle');
var guessDir = document.querySelector('.guessDir');

function minmax(value, min, max){
  if(value < min || isNaN(parseInt(value)))
    return min;

  else if(value > max)
    return max;
  else
    return value;
}

var message = function (message,number,result){
  guessTitle.innerText = message;
  lastGuess.innerText = number;
  guessDir.innerText = result;
}

message("Guess a number",userNum,startNum + " to " + endNum)

guessButton, resetButton, clearButton

console.log(targetNum);

// if (userInput.value ===""){
//  guessButton.disabled = true;
// }
// else{
//   guessButton.disabled = false;
// }


guessButton.addEventListener('click',function(){
  userNum = parseInt(userInput.value);
  userNum = minmax(userNum,startNum,endNum);
  userInput.value = "";
  if (userNum === targetNum){
    message("You are correct",userNum,"BOOM!");
  }else if (userNum<targetNum) {
    message("Your last guess was",userNum,"That is too low");
  }else {
    message("Your last guess was",userNum, "That is too high");
  }
});

resetButton.addEventListener('click',function(){
  targetNum = Math.floor((Math.random() * endNum) + startNum);
  message("Guess a number",userNum, startNum + " to " + endNum);
  lastGuess.innerText = "";
  console.log(targetNum);
});

clearButton.addEventListener('click', function(){
  userInput.value = "";
})





// disable buttons

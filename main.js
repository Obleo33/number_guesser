//buttons
var guessButton = document.getElementById('guessButton');
var resetButton = document.getElementById('resetButton');
var clearButton = document.getElementById('clearButton');
var resetButton = document.getElementById('resetButton');

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

var message = function (message,result){
  guessTitle.innerText = message;
  lastGuess.innerText = userNum;
  guessDir.innerText = result;
}

guessButton.addEventListener('click',function(){
  userNum = parseInt(userInput.value);
  console.log(userNum);
  if (userNum === targetNum){
    message("You are correct","BOOM!");
  }else if (userNum<targetNum) {
    message("Your last guess was","That is too low");
  }else {
    message("Your last guess was", "That is too high");
  }
});

resetButton.addEventListener('click',function(){
  
})



// disable buttons

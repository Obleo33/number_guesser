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


// helper functions
var message = function (message,number,result){
  var lastGuess = document.querySelector('.lastGuess');
  var guessTitle = document.querySelector('.guessTitle');
  var guessDir = document.querySelector('.guessDir');
  guessTitle.innerText = message;
  lastGuess.innerText = number;
  guessDir.innerText = result;
};

var minmax = function(value, min, max){

  if(isNaN(value) === true){
    message("You must enter a number","","");
  }else if(value < min){
    message("the minimum number is "+ startNum,"","choose a number " + startNum + " to " + endNum);
  }else if(value > max){
    message("the maximum number is " + endNum,"", "choose a number " + startNum + " to " + endNum);
  }else{
    submit(userNum);
  }
}

var submit = function (userNum){
  if (userNum === targetNum){
    message("You are correct",userNum,"BOOM!");
  }else if (userNum<targetNum) {
    message("Your last guess was",userNum,"That is too low");
  }else {
    message("Your last guess was",userNum, "That is too high");
  }
}

message("Guess a number",userNum,startNum + " to " + endNum);

guessButton.addEventListener('click',function(){
  userNum = parseInt(userInput.value);
  minmax(userNum,startNum,endNum);
  userInput.value = "";
  document.getElementById("resetButton").disabled = false;
});

resetButton.addEventListener('click',function(){
  targetNum = Math.floor((Math.random() * endNum) + startNum);
  message("Guess a number","", startNum + " to " + endNum);
  console.log(targetNum);
  document.getElementById("resetButton").disabled = true;
  document.getElementById("guessButton").disabled = true;
  document.getElementById("clearButton").disabled = true;
});

clearButton.addEventListener('click', function(){
  userInput.value = "";
  document.getElementById("guessButton").disabled = true;
  document.getElementById("clearButton").disabled = true;
});

userInput.addEventListener('keyup', function(){
  document.getElementById("guessButton").disabled = false;
  document.getElementById("clearButton").disabled = false;
})

guessButton.addEventListne

console.log(targetNum);

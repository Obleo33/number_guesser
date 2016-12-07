//buttons
var guessButton = document.getElementById('guessButton');
var resetButton = document.getElementById('resetButton');
var clearButton = document.getElementById('clearButton');
var settingsButton = document.getElementById('settingsButton');
var updateMinButton = document.getElementById('updateMin');
var updateMaxButton = document.getElementById('updateMax');
// input
var userInput = document.getElementById('userInput');
// global variables
var startNum = 1;
var endNum = 100;
var targetNum = Math.floor((Math.random() * endNum) + startNum);
var userNum = "";


// helper functions
function message(message,number,result){
  var lastGuess = document.querySelector('.lastGuess');
  var guessTitle = document.querySelector('.guessTitle');
  var guessDir = document.querySelector('.guessDir');
  guessTitle.innerText = message;
  lastGuess.innerText = number;
  guessDir.innerText = result;
};

function minmax(value, min, max){
  if(isNaN(value) === true){
    message("You must enter a number","","");
  }else if(value < min){
    message("Minimum number is "+ startNum,"","choose a number " + startNum + " to " + endNum);
  }else if(value > max){
    message("Maximum number is " + endNum,"", "choose a number " + startNum + " to " + endNum);
  }else{
    submit(userNum);
  }
}

function submit(userNum){
  if (userNum === targetNum){
    message("You are correct",userNum,"BOOM!");
  }else if (userNum<targetNum) {
    message("Your last guess was",userNum,"That is too low");
  }else {
    message("Your last guess was",userNum, "That is too high");
  }
}

function disableButton(button,value){
  console.log(button);
  document.getElementById(button).disabled = value;
}

// main

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
  disableButton("resetButton",1);
  disableButton("guessButton",1);
  disableButton("clearButton",1);
});

clearButton.addEventListener('click', function(){
  userInput.value = "";
  disableButton("guessButton",1);
  disableButton("clearButton",1);
});

userInput.addEventListener('keyup', function(){
  disableButton("guessButton",0);
  disableButton("clearButton",0);
})

// Settings

settingsButton.addEventListener('click', function(){
  var settingsWin = document.getElementById('settings')
  settingsWin.classList.toggle('hidden');
})

minNum.addEventListener('keyup', function(){
  disableButton("updateMin",0);
})

maxNum.addEventListener('keyup', function(){
  disableButton("updateMax",0);
})

updateminButton.addEventListener('click', function(){

})

updateMaxButton.addEventListener('click', function(){
  
})

console.log(targetNum);

console.log('JS is working!!')

//create quiz app using object constructor notation and prototype methods
//constructor will take an object  with question answer as key value pair
//key would be the question
//value would be the answer
//first create constructor and prototype
//then add methods to render the q's
//if user input answers match the key's value then turn to green
//this will be the plan for now just to keep quiz app simpe
//add event listener on click will check the answers

//constructor function
function Quiz(quizAsObj) {
  this.questions = Object.keys(quizAsObj)
  this.answers = Object.values(quizAsObj)
}

//render questions method
Quiz.prototype.renderQs = function() {
  //questions created through constructor function
  var qs = this.questions
  //get ul 
  var listQs = document.getElementById('questions')
  //render questions as list and input
  for (var i = 0; i < qs.length; i++) {
    //create li 
    var li = document.createElement('li')
    //create input
    var input = document.createElement('input')
    //add q's as text content and render questions
    li.textContent = qs[i]
    //create input in li
    li.appendChild(input)
    //append create elements to ul
    listQs.appendChild(li)
  }
}

//method to check answers and return green for correct red for incorrect
Quiz.prototype.checkAns = function() {
  //gets all the user inputs
  var guesses = document.getElementsByTagName('input')
  //check to see if they match with answers
  for (i = 0; i < this.answers.length; i++) {
  //if it does then change background color to green
    if(guesses[i].value == this.answers[i]) {
      guesses[i].style.backgroundColor = "green"
    } else {
  //else changes background color it to red
      guesses[i].style.backgroundColor= "red"
    }
  }
}

//turnign an event listern to become a method
Quiz.prototype.submitGuesses = function() {

  var quiz = this
  return document.getElementById('form').addEventListener('submit',
    function(event){
      event.preventDefault()
      quiz.checkAns()
    }
  )
}

var simpleMath = new Quiz(
  {
    "23+84?": 2,
    "5-2?": 3,
    "5*7?": 35,
    "10/2?": 5
  }
)

var testQ = new Quiz(
  {
    "what color is the sky": "blue",
    "how old are you?": 42,
    "what is your social security number": 1234567,
    "how much do you weight in pounds": 300
  }
)

simpleMath.renderQs()
simpleMath.submitGuesses()
testQ.renderQs()
testQ.submitGuesses()


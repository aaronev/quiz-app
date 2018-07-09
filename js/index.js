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
//it will take an object as keys being the q's and values as answers
//put answers in as lowercase if answers are strings
function Quiz(quizAsObj) {
  this.questions = Object.keys(quizAsObj)
  this.answers = Object.values(quizAsObj).map(el => {
    if (typeof el == "string") {
      return el.toLowerCase().trim()
    } else return el
  })
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
    //create div for spacing
    var div = document.createElement('div')
    //create input
    var input = document.createElement('input')
    //add q's as text content and render questions
    li.textContent = qs[i]
    //append input to div
    div.appendChild(input)
    //create input in li
    li.appendChild(div)
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
  //if answers are strings then put to lowercase and trim answers
    if(typeof guesses[i].value == "string") {
      guesses[i].value = guesses[i].value.trim().toLowerCase()
    }
  //if answers match then change background color to green
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

//created a setup function to invoke functions for me
Quiz.prototype.setUp = function() {
  return (
    this.renderQs(),
    this.submitGuesses(),
    this.fail()
  )
}

new Quiz(
  {
    "6/2(1+2)?": 9,
    "Fifth President of the United States?": "James Monroe",
    "What color is the sky?": "blue",
    "What is a name you call myself (Sound of Music)?": "ME",
    "(5*8)/2(6/3)+1?": 41,
    "First President of the United States?": "george washington",
    "What is inside of a volcano": "lava",
    "What a day keeps the doctor a way?": "apple"
  }
).setUp()

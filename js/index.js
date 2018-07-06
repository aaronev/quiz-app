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

function Quiz(quizAsObj) {
  this.questions = Object.keys(quizAsObj)
  this.answers = Object.values(quizAsObj)
}

Quiz.prototype.renderQs = function() {
  var qs = this.questions
  for (var i = 0; i < qs.length; i++) {
    //get ul 
    //create li 
    //create 
    //add q's as text content and render questions
    //create input in li
    //
  }
}

Quiz.prototype.checkAns = function() {

}

var simpleMath = new Quiz(
  {
    "23+84?": 2,
    "5-2?": 3,
    "5*7?": 35,
    "10/2?": 5
  }
)


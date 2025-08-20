/*Add your JavaScript here*/
var teaScore = 0;
var coffeeScore = 0;

var questionCount = 0;

var result = document.getElementById("result");

var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");


q1a1.addEventListener("click", coffee);
q1a2.addEventListener("click", tea);

q2a1.addEventListener("click", coffee);
q2a2.addEventListener("click", tea);

q3a1.addEventListener("click", tea);
q3a2.addEventListener("click", coffee);

q4a1.addEventListener("click", coffee);
q4a2.addEventListener("click", tea);


function tea() {
  teaScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " teaScore = " + teaScore);
  if (questionCount == 4) {
    console.log("The quiz is done!")
    updateResult();
  }
}

function coffee() {
  coffeeScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " coffeeScore = " + coffeeScore);
  if (questionCount == 4) {
    console.log("The quiz is done!")
    updateResult();
  }
}

function updateResult() {
  if (teaScore >= 3) {
    result.innerHTML = "You are a tea drinker!";
    console.log("You are a tea drinker!");
  } else if (coffeeScore >= 3) {
    result.innerHTML = "You are a coffee drinker!";
    console.log("You are a coffee drinker!");
  } else if (teaScore + coffeeScore >= 2) {
    result.innerHTML = "It's a tie! Try again.";
    console.log("It's a tie! Try again.")
  }
}

var button = document.getElementById("restart");
button.addEventListener("click", restartquestionCount);
function restartquestionCount () {
  document.getElementById("restart").innerHTML = "restart";
  result.innerHTML = "  You are a..."
  questionCount = 0;
  teaScore = 0;
  coffeeScore = 0;
}









let startButton = document.getElementById("start-btn");
let header = document.querySelector("h1");
let directions = document.querySelector("p");
let answerContainer = document.getElementById("answer-container")
let questionNumber = 0
let ans1 = document.getElementById("btn-1");
let ans2 = document.getElementById("btn-2");
let ans3 = document.getElementById("btn-3");
let ans4 = document.getElementById("btn-4");
let buttons = document.querySelectorAll(".btn");
let timeEl = document.getElementById("timeEl");
let secondsLeft = 200;
let gameOver = true;


let questions = [
    {
        question: "What form of code gives a website basic structure and content?",
        answers: {
            a: "CSS",
            b: "Javascript",
            c: "HTML",
            d: "jQuery",
        },
        correctAnswer: "HTML"
    },
    {
        question: "What form of code styles a website?",
        answers: {
            a: "CSS",
            b: "Javascript",
            c: "HTML",
            d: "jQuery",
        },
        correctAnswer: "CSS"
    },
    {
        question: "What form of code gives a website logic and allows it to be dynamic?",
        answers: {
            a: "CSS",
            b: "Javascript",
            c: "HTML",
            d: "c++",
        },
        correctAnswer: "Javascript"
    },
    {
        question: "When using arrays in javaScript, what is the correct syntax",
        answers: {
            a: "[]",
            b: "{}",
            c: "()",
            d: "<>",
        },
        correctAnswer: "[]"
    },
]
console.log(questions[0].answers.a)
console.log(questions[0].question)
console.log(questions.length);

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till game ends";
  
      if(secondsLeft === 0 || gameOver) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
      }
  
    }, 1000);
}


startButton.addEventListener("click", function (event) {
    startButton.classList.add("hidden");
    directions.classList.add("hidden");
    answerContainer.classList.remove("hidden");
    gameOver = false;
    setTime()
    timeEl.classList.remove("hidden")
    newQuestion(questionNumber);

})

function checkAnswer(e) {
    console.log(e.target.innerHTML)
    if (questions[questionNumber].correctAnswer !== e.target.innerHTML) {
        console.log("Deduct time");
        secondsLeft -= 5;
    } 
    if (questionNumber <= (questions.length-1)){
        questionNumber++;
        newQuestion()
    } else {
        gameOver=true;
    }

    }
    


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", checkAnswer)
}

function newQuestion() {
    header.innerHTML = questions[questionNumber].question;
    ans1.innerHTML = questions[questionNumber].answers.a;
    ans2.innerHTML = questions[questionNumber].answers.b;
    ans3.innerHTML = questions[questionNumber].answers.c;
    ans4.innerHTML = questions[questionNumber].answers.d;
}


// If a question is wrong, deduct time
// Increment question number 
// call newQuestion
// When it is the last question we want to end the game when the answer is clicked. If it is correct end the game, if it is wrong deduct time then end
// checkAnswer
// going to compare the button that was clicked to the correct answer. 
// if its correct and there is another question then increment questionNumber and show the next question.
// if its correct and not another question then end game
// if its incorrect and there is another question deduct time increment question number and show next question
// if its incorrect and there is no other question deduct and end game
// if at anytime time reaches 0 end game
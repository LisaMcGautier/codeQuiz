// scores internal link (anchor)
var scores = document.getElementById("scores");

// timer at 0 when page loads && starts onclick start button
// function in previous activity

var timer = document.getElementById("timer");

var startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", startQuiz);

var countdown;
countdown = 10;

// title h1 && array [] of questions getElementById.innerHTML "question"
// objective p && possible answers
// array [] of objects {3 incorrect answers && 1 correct answer}

var title = document.getElementById("title");
var objective = document.getElementById("objective");

var questions = [

    {
        question: "Variables can be assigned all of the following values EXCEPT:",
        answers: ["extension", "string", "number", "Boolean"],
        correctAnswer: "extension"
    },

    {
        question: "Functions must be ____ before they can be utilized by the program.",
        answers: ["analyzed", "declared", "linked", "limited"],
        correctAnswer: "declared"
    },

    {
        question: "All of the following keywords create a pop-up dialog box in the window EXCEPT:",
        answers: ["alert", "console.log", "confirm", "prompt"],
        correctAnswer: "console.log"
    },

    {
        question: "The appropriate syntax for the end of a block of code is",
        answers: ["semi-colon", "colon", "ampersand", "comma"],
        correctAnswer: "semi-colon"
    },

    {
        question: "An array must be enclosed within",
        answers: ["parentheses", "curly brackets", "arrow brackets",
            "square brackets"],
        correctAnswer: ""
    },

    {
        question: "Which characters represent the correct syntax for the “or” operator?",
        answers: ["||", "&&", "//", "##",],
        correctAnswer: "||"
    },

    {
        question: "An infinite loop will cause a(n)",
        answers: ["argument", "stack overflow", "event", "syntax error"],
        correctAnswer: "stack overflow"
    },

    {
        question: "A function that is already inherent to JavaScript is a",
        answers: ["conditional", "method", "parameter", "window"],
        correctAnswer: "method"
    },

    {
        question: "JavaScript utilizes ____ because the programming language tends to ignore spaces.",
        answers: ["camelCase", "upperCase", "lowerCase", "NaN"],
        correctAnswer: "camelCase"
    },

    {
        question: "The DOM (Document Object Model) recognizes all of the following EXCEPT:",
        answers: ["parent(s)", "child(ren)", "random(s)", "sibling(s)"],
        correctAnswer: "random(s)"
    },

    {
        question: "To connect multiple objects together is to",
        answers: ["callback", "comment", "concatenate", "index"],
        correctAnswer: "concatenate"
    },

];


// all answers activate next question



var currentIndex = 0;
var currentQuestion = questions[currentIndex].question;
var currentAnswers = questions[currentIndex].answers;
// currentIndex = currentIndex++;

// function
// loop

function showQuestions() {

    title.innerHTML = currentQuestion;

    objective.innerHTML = "";

    var answerButtons = ["buttonA", "buttonB", "buttonC", "buttonD"];

    for (var i = 0; i < answerButtons.length; i++) {
        var addButton = document.createElement("button");
        // addButton.innerText = answerButtons[i];
        addButton.innerText = questions[currentIndex].answers[i];
        document.getElementById("objective").appendChild(addButton);
        // document.getElementById("objective").children[0].setAttribute("style","margin-left: 2px; margin-right 2px");
        // document.getElementById("objective").children[1].setAttribute("style","margin-left: 2px; margin-right 2px");
        // document.getElementById("objective").children[2].setAttribute("style","margin-left: 2px; margin-right 2px");
        // document.getElementById("objective").children[3].setAttribute("style","margin-left: 2px; margin-right 2px");
    }

    document.getElementById("objective").addEventListener("click", function (event) {
        console.log(event.target);
        var buttonContent = event.target.innerText;
        console.log(buttonContent);    
    
    });

}

function checkAnswer() {

}


// console.log(innerText);
// console.log(event.target.value);
// console.log(answerButton.innerText);
// console.log(questions[currentIndex].answers[i]);
// console.log(event.currentTarget.innerText);

// if(event.target.value){

// }

// if(event.target.matches(button)){
    // var buttonText = event.currentTarget.innerText;
    // console.log(buttonText);
// }





// incorrect answers decrement timer



// start button
// disappears onclick


// function
function startQuiz() {

    var interval = setInterval(function () {
        timer.innerHTML = "Time Remaining: " + countdown;
        countdown--;

        console.log(countdown);

        if (countdown === -1) {
            clearInterval(interval);
            title.innerHTML = "Game Over!";
        }

    }, 1000);

    showQuestions();

    startBtn.style.display = "none";

}


// GAME ENDS WHEN TIMER = 0 || ALL QUESTIONS ANSWERED


// var currentIndex = 0;
// var currentImage = images[currentIndex];

// carouselBox.setAttribute("style", "background-image: url('" + currentImage + "')");

// carouselBox.addEventListener("click", function () {
//     window.location.href = currentImage;
// });

// console.log(currentIndex);
// console.log(currentImage);

// nextBtn.addEventListener("click", function () {
//     event.stopPropagation();

//     currentIndex++;
//     currentImage = images[currentIndex];

//     if (currentIndex >= images.length) {
//         currentIndex = 0;
//         currentImage = images[currentIndex];
//     }

//     console.log(currentIndex);
//     console.log(currentImage);


//     carouselBox.setAttribute("style", "background-image: url('" + currentImage + "')");
//     // carouselBox.style.backgroundImage = "url('" + currentImage + "')"
// });



// function showCurrentQuestion() {

//     document.body.innerHTML="";

//     var questionTitle=document.createElement("h1");
//     questionTitle.innerText=questions[currentQuestion].question;
//     document.body.appendChild(questionTitle);

//     var questionsList=document.createElement("ul");


//     for () {

//     }
// }




// an idea: background color flashes green (1 sec?) if correct
// flashes red if incorrect
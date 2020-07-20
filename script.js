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

// function showQuestions() {

//     title.innerHTML = questions[0];

//     objective.innerHTML = answers[0];

// }



function startQuiz() {

    // showQuestions();
    
    startBtn.style.display = "none";
    
    var interval = setInterval(function () {
        timer.innerHTML = "Time Remaining: " + countdown;       
        countdown--;          
              
        console.log(countdown);

        if (countdown === -1) {
            clearInterval(interval);
            title.innerHTML = "Game Over!";
        }

    }, 1000);

}



// incorrect answers decrement timer

// function
// loop

// start button
// disappears onclick

// GAME ENDS WHEN TIMER = 0 || ALL QUESTIONS ANSWERED



// an idea: background color flashes green (1 sec?) if correct
// flashes red if incorrect






// var currentIndex = 0;
// var currentQuestion = questions[currentIndex];



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


    
    
// });
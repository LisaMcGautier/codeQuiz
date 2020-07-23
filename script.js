// SCORES INTERNAL LINK (LOCAL STORAGE)
// var scores = document.getElementById("scores");
// retreiveHighScores()
// var highScoreObjectJSON=localStorage.getItem(highScore);
// console.log(highScoreObjectJSON);

// TIMER AT 0 WHEN PAGE LOADS && STARTS ON CLICK START BUTTON

var timer = document.getElementById("timer");

var startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", startQuiz);

var countdown;
countdown = 60;

// TITLE h1 && ARRAY [] OF QUESTIONS getElementById.innerHTML "question"
// getElementById.innerHTML "objective" p && POSSIBLE ANSWERS
// ARRAY [] of OBJECTS {3 incorrect answers && 1 correct answer}

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
        correctAnswer: "square brackets"
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

    // console.log(questions.length);
];


var currentIndex = 0;
// var currentQuestion = questions[currentIndex].question;
// var currentAnswers = questions[currentIndex].answers;
// var currentCorrectAnswer = questions[currentIndex].correctAnswer;
// currentIndex = currentIndex++;

// function
// loop

function showQuestions() {

    // console.log("Showing Question Index: " + currentIndex);

    title.innerHTML = questions[currentIndex].question;

    objective.innerHTML = "";

    var answerButtons = ["buttonA", "buttonB", "buttonC", "buttonD"];

    for (var i = 0; i < answerButtons.length; i++) {
        var addButton = document.createElement("button");
        // addButton.innerText = answerButtons[i];
        addButton.innerText = questions[currentIndex].answers[i];
        document.getElementById("objective").appendChild(addButton);
        addButton.setAttribute("class", "btn btn-info");
        addButton.setAttribute("style", "margin: 5px");
        addButton.addEventListener("click", checkAnswer);
    }

    // checkAnswer();

}

// function

function checkAnswer(event) {

    // document.getElementById("objective").addEventListener("click", function (event) {
    // console.log(event.target);
    var buttonContent = event.target.innerText;
    // console.log(buttonContent);

    // INCORRECT ANSWERS DECREMENT TIMER

    if (buttonContent != questions[currentIndex].correctAnswer) {
        countdown -= 7;
        // console.log("wrong!");
    } else {
        // console.log("RIGHT!");
    }

    // });

    // ALL ANSWERS ACTIVATE NEXT QUESTION
    currentIndex++;

    // console.log(currentIndex);

    // GAME ENDS WHEN ALL QUESTIONS ANSWERED

    if (currentIndex >= questions.length) {

        console.log(countdown);
        // console.log(countdown.value);
        localStorage.setItem("score", countdown);

        clearInterval(interval);
        title.setAttribute("style", "color: green");
        title.innerHTML = "You Did It!👏";
        objective.innerHTML = "";
        objective.innerHTML = "Your score is : " + " " + countdown;

        // localStorage.setItem("score", countdown.value);

        var highscoreButton = document.createElement("button");
        highscoreButton.innerText = ("High Scores");
        objective.appendChild(highscoreButton);
        highscoreButton.setAttribute("class", "btn btn-light");
        highscoreButton.setAttribute("style", "margin: 20px; font-weight: bold");

        highscoreButton.addEventListener("click", function (event) {
            highscore();
        })


        // IT TOOK A WHILE TO GET THE SYNTAX CORRECT...

        // if() {}
        // highscoreButton.addEventListener("click", function() {})        
        // highscoreButton.addEventListener("click", highscore());
        // highscore();


    }

    else {
        showQuestions();
    }


}

// SCORES INTERNAL LINK (LOCAL STORAGE)
// var scores = document.getElementById("scores");



// function

var initials;
var currentScore;

function highscore() {

    title.innerHTML = "High Score!";

    objective.innerHTML = "Your score is : " + " " + countdown;
    currentScore = countdown;

    objective.innerHTML = "Enter Initials : "
    initials = document.createElement("input");
    objective.appendChild(initials);
    initials.addEventListener("keypress", function () {
        console.log("input");
    });


    var submitButton = document.createElement("button");
    submitButton.innerText = ("Submit");
    objective.appendChild(submitButton);
    submitButton.setAttribute("class", "btn btn-primary btn-sm");
    submitButton.setAttribute("style", "margin: 5px");
    submitButton.addEventListener("click", function () {
        console.log(initials.value);
        localStorage.setItem("winner", initials.value);
    });


}

// function

var interval;

function startQuiz() {

    interval = setInterval(function () {
        timer.innerHTML = "Time Remaining: " + countdown;
        countdown--;

        // console.log(countdown);

        // GAME ENDS WHEN TIMER = 0

        if (countdown <= 0) {
            clearInterval(interval);
            title.setAttribute("style", "color: red");
            title.innerHTML = "Game Over! 😫";
            objective.innerHTML = "";

        }

    }, 1000);

    timer.setAttribute("style", "color: blue");

    showQuestions();

    // START BUTTON DISAPPEARS ON CLICK

    startBtn.style.display = "none";

}


// function

function saveHighScore() {
    var score = localStorage.getItem("score", countdown);
    var name = localStorage.getItem("winner", initials);
    var highScore = {
        score: "score",
        name: "winner"
    }
    console.log(highScore);

    var highScoreObjectJSON = JSON.stringify(highScore);
    console.log(highScoreObjectJSON);
    localStorage.setItem("highscore", highScoreObjectJSON);

}


// SCORES INTERNAL LINK?? (LOCAL STORAGE)
// function

// var scores = document.getElementById("scores");

// function retreiveHighScores() {
//     var highScoreObjectJSON = localStorage.getItem(highScore);
//     var highScore = {
//         score: "score",
//         name: "winner"
//     }
    
//     console.log(highScoreObjectJSON);
// }

// TRYING TO SAVE THE SCORE AND THE INITIALS AS AN OBJECT IN LOCAL STORAGE.  NOT SUCCESSFUL. YET.

// LINE 159
// localStorage.getItem("score", countdown);
// LINE 225
// localStorage.getItem("winner", initials);

// console.log(localStorage.getItem("score", countdown));
// console.log(localStorage.getItem("winner", initials));

// var highScore = {
//     score: "score",
//     name: "winner"
// }


// var highScore={
//     score: ("score", countdown),
//     winner: ("winner", initials)
// }

// var highScoreObjectJSON=JSON.stringify(highScore);
// console.log(highScoreObjectJSON);
// localStorage.setItem("highscore", highScoreObjectJSON);

// var highScoreObjectJSON=localStorage.getItem(highScore);
// console.log(highScoreObjectJSON);

// var highScore={
//     "score": countdown,
//     "winner": initials
// }

// var highScore={
//     initals: "winner", 
//     countdown: "score"
// }

// console.log("score", countdown);
// console.log("winner", initials);

// console.log("score");
// console.log("winner");




// USED THIS TEMPLATE TO CREATE HIGHSCORE AND SUBMIT BUTTONS

// var addButton = document.createElement("button");
// addButton.innerText = questions[currentIndex].answers[i];
// document.getElementById("objective").appendChild(addButton);
// addButton.setAttribute("class", "btn btn-info");
// addButton.setAttribute("style","margin: 5px");
// addButton.addEventListener("click", checkAnswer);


// SEVERAL ATTEMPTS THAT DID NOT RETURN THE DESIRED RESULT OF THE BUTTON STRING IN THE CONSOLE LOG:


// console.log(innerText);
// console.log(event.target.value);
// console.log(answerButton.innerText);
// console.log(questions[currentIndex].answers[i]);
// console.log(event.currentTarget.innerText);

// if(event.target.value){}

// if(event.target.matches(button)){
// var buttonText = event.currentTarget.innerText;
// console.log(buttonText);
// }

// TRIED TO SEPARATE THE BUTTONS FROM EACH OTHER, BUT THIS APPROACH DID NOT WORK.

// document.getElementById("objective").children[0].setAttribute("style","margin-left: 2px; margin-right 2px");
// document.getElementById("objective").children[1].setAttribute("style","margin-left: 2px; margin-right 2px");
// document.getElementById("objective").children[2].setAttribute("style","margin-left: 2px; margin-right 2px");
// document.getElementById("objective").children[3].setAttribute("style","margin-left: 2px; margin-right 2px");


// THE INSTRUCTOR SAYS THAT A FOR LOOP WILL PROCESS THE QUESTIONS TOO QUICKLY  

// for (var i = 0; currentIndex >= questions.length; i++) {
// currentIndex = currentIndex++;
// }



// RAN OUT OF TIME TO TRY TO IMPLEMENT THIS IDEA...


// an idea: background color flashes green (1 sec?) if correct
// flashes red if incorrect
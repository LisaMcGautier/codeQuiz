// SCORES INTERNAL LINK (LOCAL STORAGE)
var scores = document.getElementById("scores");

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

    title.innerHTML = questions[currentIndex].question;

    objective.innerHTML = "";

    var answerButtons = ["buttonA", "buttonB", "buttonC", "buttonD"];

    for (var i = 0; i < answerButtons.length; i++) {
        var addButton = document.createElement("button");
        // addButton.innerText = answerButtons[i];
        addButton.innerText = questions[currentIndex].answers[i];
        document.getElementById("objective").appendChild(addButton);
        addButton.setAttribute("class", "btn btn-info");
        addButton.setAttribute("style","margin: 5px");
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
            console.log("wrong!");
        } else {
            console.log("RIGHT!");
        }

    // });

    // ALL ANSWERS ACTIVETE NEXT QUESTION
    currentIndex++;

    console.log(currentIndex);

    // GAME ENDS WHEN ALL QUESTIONS ANSWERED

    if (currentIndex >= questions.length) {
        clearInterval(interval);
        title.setAttribute("style", "color: green");
        title.innerHTML = "You Did It!👏";
        objective.innerHTML = "";
        objective.innerHTML = "Your score is : " + " " + countdown;

        highscore();

    }

    showQuestions();

}

// SCORES INTERNAL LINK (LOCAL STORAGE)
// var scores = document.getElementById("scores");

// function

function highscore(){

    title.innerHTML = "High Score!";

    objective.innerHTML = "Your score is : " + " " + countdown;

    objective.innerHTML = "Enter Initials : "
    var initials = document.createElement("input");
    objective.appendChild(initials);
    initials.addEventListener("keypress", function() {
        console.log("input")
    });


    var submitButton = document.createElement("button");  
    submitButton.innerText = ("Submit");          
    objective.appendChild(submitButton);
    submitButton.setAttribute("class", "btn btn-primary btn-sm");
    submitButton.setAttribute("style","margin: 5px");
    submitButton.addEventListener("click", function() {
        console.log(initials.value);
    } );
}

// var addButton = document.createElement("button");
// addButton.innerText = questions[currentIndex].answers[i];
// document.getElementById("objective").appendChild(addButton);
// addButton.setAttribute("class", "btn btn-info");
// addButton.setAttribute("style","margin: 5px");
// addButton.addEventListener("click", checkAnswer);



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


// for (var i = 0; currentIndex >= questions.length; i++) {
// currentIndex = currentIndex++;
// }






// an idea: background color flashes green (1 sec?) if correct
// flashes red if incorrect
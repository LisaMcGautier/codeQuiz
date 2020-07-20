// scores internal link (anchor)
// var scores = getElementById("scores");

// timer at 0 when page loads && starts onclick start button
// function in previous activity

var timer = document.getElementById("timer");
var startBtn = document.getElementById("startBtn");
var title = document.getElementById("title");

var countdown;
countdown = 10;
console.log(countdown);


function startQuiz() {
    var interval = setInterval(function () {
        var timeRemaining = timer.innerHTML = "Time Remaining: " + countdown;       
        countdown--;

        console.log(countdown);

        if (countdown === -1) {
            clearInterval(interval);
            title.innerHTML = "Game Over!";
        }

    }, 1000);

}

startBtn.addEventListener("click", startQuiz());

// title h1 && array [] of questions getElementById.innerHTML "question"
// objective p && possible answers
// array [] of objects {3 incorrect answers && 1 correct answer}



var questions = [
    {
        question: "Variables can be assigned all of the following values EXCEPT:  ",
        answers: ["extension", "string", "number", "Boolean"],
        correctAnswer: "extension"
    },
]




// incorrect answers decrement timer
// all answers activate next question
// function
// loop

// start button
// disappears onclick

// GAME ENDS WHEN TIMER = 0 || ALL QUESTIONS ANSWERED



// an idea: background color flashes green (1 sec?) if correct
// flashes red if incorrect
# codeQuiz

# 04 Web APIs: Code Quiz

As you proceed in your career as a web developer, you will probably be asked to complete a coding assessment, which is typically a combination of multiple-choice questions and interactive challenges. Build a 
- [x] **timed** code quiz with 
- [x] **multiple-choice questions**. This app will run in the browser and feature 
- [x] dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a 
- [x] clean and polished user interface and be 
- [x] responsive, ensuring that it adapts to multiple screen sizes.

## User Story

```
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
- [x] WHEN I click the **start button**
- [x] THEN a **timer starts** and I am 
- [x] presented with a **question**
- [x] WHEN I **answer a question**
- [x] THEN I am presented with **another question**
- [x] WHEN I answer a question **incorrectly**
- [x] THEN **time is subtracted from the clock**
- [x] WHEN **all questions are answered** 
- [x] or the **timer reaches 0**
- [x] THEN the **game is over**
- [] WHEN the game is over
- [] THEN I can **save my initials and score**
```

7/18:

Began mapping out the logic to create this project.
Have created index.html as a basic template, indexBS.html as a templete using Bootstrap, style.css for basic styling, script.js, which for the moment only contains a logistic approach to programming the quiz.
Having trouble with the alignment of the timer at the top right and centering the button on the page.
Next steps will involve writing the questions, then creating the JavaScript code to perform the functionality of the project.

7/19

Started working on the timer with a function called "startQuiz".
The basic concept is working, but it executes when the page reloads, not when the startBtn is clicked.

7/20

Spent a considerable amount of time creating the questions in a Word document.  This helped me to organize my thoughts, but also to look at the questions from a wider lens. Began entering the questions and answers into an array of objects in the script.js file.  Discovered that copying and pasting the questions and possible answers into the array of objects will be a helpful shortcut in this project.

All questions and answers have been added to the array of objects.

For simplicity, working exclusively with indexBS.html, as the styling is more visually pleasing.  Will include most recent update of index.html with 

Timer now starts on click of startBtn, whixh also disappears when clicked.

Have only begun working on the function to display the array of questions coordinated with the array of possible answers. Work in progress!

7/21

Created button placeholders (buttonA, buttonB, buttonC, buttonD). After several tries, found the correct placement of the `objective.innerHTML = "";` within the code block.

Discovered how to replace the placeholder button labels with the answers to the question.

Added a small margin to #objective and #timer to improve visual appeal.

It may not seem like much, but I just spent a long time trying to figure out how to `console.log()` the button clicked and keep only the string within the button. I had to rewatch the lecture to finally get it right!!

Also tried to separate the buttons using dynamic css, but was ultimately unsuccessful.


Had the interesting experience of making too many changes at once, and throwing multiple errors in the console.

Restored the most recent script.js committed to the repo as a new file, "scriptBackup.js" and used Visual Studio Code to compare the two files.

The behavior of the page has returned to previous ecpectations, but I am now struggling with getting the questions and the answers to change once an answer is selected.

Not sure if I am ready to commit the file as it is...

Need to take a moment to assess.

Separated `showQuestions` function into two parts; created a new function `checkAnswer`.  Logging "RIGHT!" or "wrong!" to the console.

Figured out that my syntax for currentIndex was incorrect!!  I was ASSIGNING `currentIndex = currentIndex++` instead of simply INCREMENTING currentIndex++!! 🙂

Added some dynamic styling and checked for responsiveness on smaller screens.

Figured out how to change the background color while keeping the integrity of the Bootstrap styling.

7/22

Started working on the highscore function.  Not there yet.
Made adjustments to the "You did it!" screen; input field and Submit button not showing up.

Input field and Submit button appear on highscore screen; input value logging to console, but final score not showing up on main screen.

Fixed a bug in the `showQuestions` function that was logging an error to the console.

Once the player completes the game, they can save their initials and score.
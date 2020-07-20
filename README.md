# codeQuiz

# 04 Web APIs: Code Quiz

As you proceed in your career as a web developer, you will probably be asked to complete a coding assessment, which is typically a combination of multiple-choice questions and interactive challenges. Build a 
- [] **timed** code quiz with 
- [] **multiple-choice questions**. This app will run in the browser and feature 
- [] dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a 
- [] clean and polished user interface and be 
- [] responsive, ensuring that it adapts to multiple screen sizes.

## User Story

```
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
- [] WHEN I click the **start button**
- [] THEN a **timer starts** and I am 
- [] presented with a **question**
- [] WHEN I **answer a question**
- [] THEN I am presented with **another question**
- [] WHEN I answer a question **incorrectly**
- [] THEN **time is subtracted from the clock**
- [] WHEN **all questions are answered** 
- [] or the **timer reaches 0**
- [] THEN the **game is over**
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
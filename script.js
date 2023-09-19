var generateBtn = document.querySelector("#beginquiz");
var timerElement = document.querySelector("#timeleft");
var retakeBtn = document.querySelector("#backtomenu");
var scoredisplay = document.querySelector("#grade");

var quizArray = [
    {
    id: "0",
    question: "Commonly used data types DO Not Include:",
    options: [ 
        "strings",
        "booleans",
        "alerts",
        "numbers",],
        correct: "alerts",
     },
     {
        id: "1",
        question: "The condition in an if / else statement is enclosed with _____",
        options: [
            "quotes",
            "curly brackets",
            "parenthesis",
            "square brackets"],
            correct: "parenthesis",
     },
     {
        id: "2",
        question: "Arrays in Javascript can be used to store",
        options: [ "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"],
        
        correct: "all of the above",
     },
     {
        id: "3", 
        question: "String values must be enclosed within ____ when being assigned to variables",
        options: [
            "commas",
            "curly brakcets",
            "quotes",
            "parenthesis",
        ],
        correct: "quotes"
     },
     {
        id: "4",
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: [
            "1. Javascript",
            "2. terminal/bash",
            "3. for loops",
            "4. console.log",
        ],
        correct: "console.log"
     }
]

retakeBtn.addEventListener("click", () => {
})
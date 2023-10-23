const quizData = [
   {
       question: 'Commonly used data types DO Not Include:',
       options: ['strings', 'booleans', 'alerts', 'numbers'],
       correctAnswer: 'alerts'
   },
   {
       question: 'The condition of an if/else statement is enclosed within _____.',
       options: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
       correctAnswer: 'parenthesis'
   },
   {
      question: 'Arrays in Javascript can be used to store ______',
      options: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
      correctAnswer: 'all of the above'
   },
   {
      question: 'String values must be enclosed within _____ when being assigned to variables.',
      options: ['quotes', 'curly brackets', 'commas', 'parentheses'],
      correctAnswer: 'quotes'
   },
   {
      question: 'A very useful tool used during development and debugging for printing content',
      options: ['javascript', 'console.log','terminal/bash', 'for loops'],
      correctAnswer: 'console.log'
   }

   // Add more questions as needed
];

const retryButton = document.getElementById('retry-btn');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const timerDisplay = document.getElementById('timer-display');
const scoreDisplay = document.getElementById('score-display');

let currentQuestionIndex = 0;
let score = 0;
let timer = 0;
let timerInterval;

function startQuiz() {
   showQuestion(quizData[currentQuestionIndex]);
   startTimer();
   retryButton.classList.add('hide');
}

function showQuestion(question) {
   questionElement.innerText = question.question;
   optionsContainer.innerHTML = '';
   question.options.forEach(option => {
       const button = document.createElement('button');
       button.innerText = option;
       button.classList.add('option-btn');
       button.addEventListener('click', selectAnswer);
       optionsContainer.appendChild(button);
   });
}

function selectAnswer(e) {
   const selectedButton = e.target;
   const correct = selectedButton.innerText === quizData[currentQuestionIndex].correctAnswer;
   if (correct) {
       score++;
       scoreDisplay.innerText = score;
   }
   currentQuestionIndex++;
   if (currentQuestionIndex < quizData.length) {
       showQuestion(quizData[currentQuestionIndex]);
   } else {
       endQuiz();
   }
}

function startTimer() {
   timerInterval = setInterval(function () {
       timer++;
       timerDisplay.innerText = timer;
   }, 1000);
}

function endQuiz() {
   clearInterval(timerInterval);
   questionElement.innerText = 'Quiz Completed!';
   optionsContainer.innerHTML = '';
   retryButton.classList.remove('hide');
   // You can display the final score and provide feedback to the user here
}
retryButton.addEventListener('click', function() {
   startQuiz();
   retryButton.classList.add('hide');
});

startQuiz(); // Start the quiz when the page loads
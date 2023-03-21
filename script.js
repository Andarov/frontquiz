import { html, css } from './quiz.js';

let number = document.querySelector('#number');
let currentQuestion = 0;
let score = 0;
  
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');

function showQuestion(question) {
  questionElement.textContent = question.question;

  while (answersElement.firstChild) {
    answersElement.removeChild(answersElement.firstChild);
  }

  question.answers.forEach((answer, index) => {
    const answerElement = document.createElement('button');
    answerElement.textContent = answer;
    answerElement.addEventListener('click', () => {
      if (index === question.correctAnswer) {
        score++;
      }
      question.userAnswer = index;
      nextQuestion();
    });
    answersElement.appendChild(answerElement);
  });
}

function showAnswers() {
  const answerList = document.createElement('ul');
  questions.forEach((question, index) => {
    const answerItem = document.createElement('li');
    answerItem.textContent = `${index + 1}. ${question.question}`;

    const userAnswer = question.userAnswer;
    const correctAnswer = question.correctAnswer;
    const answerText = question.answers[userAnswer];

    if (userAnswer === undefined) {
      answerItem.innerHTML += ` (Your answer: <span style="color:orange">Not answered</span>)`;
    } else if (userAnswer === correctAnswer) {
      answerItem.innerHTML += ` (Your answer: <span style="color:green">${answerText}</span>) - Correct`;
    } else {
      answerItem.innerHTML += ` (Your answer: <span style="color:red">${answerText}</span>) - Incorrect (Correct answer: ${question.answers[correctAnswer]})`;
    }

    answerList.appendChild(answerItem);
  });
  answersElement.appendChild(answerList);
}

function showResults() {
  questionElement.textContent = `You got ${score} out of ${questions.length} questions correct!`;
  while (answersElement.firstChild) {
    answersElement.removeChild(answersElement.firstChild);
  }
}

function getRandomQuestions(arr) {
  const randomQuestions = [];
  while (randomQuestions.length < 3) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomQuestion = arr[randomIndex];
    if (!randomQuestions.includes(randomQuestion)) {
      randomQuestions.push(randomQuestion);
    }
  }
  return randomQuestions;
}

let questions;
const htmlBtn = document.querySelector('.html-btn');
const cssBtn = document.querySelector('.css-btn');

htmlBtn.addEventListener('click', function() {
  htmlBtn.classList.add('none');
  cssBtn.classList.add('none');
  currentQuestion = 0;
  questions = getRandomQuestions(html);
  number.textContent = currentQuestion + 1;
  showQuestion(questions[currentQuestion]);
});

cssBtn.addEventListener('click', function() {
  htmlBtn.classList.add('none');
  cssBtn.classList.add('none');
  currentQuestion = 0;
  questions = getRandomQuestions(css);
  number.textContent = currentQuestion + 1;
  showQuestion(questions[currentQuestion]);
});

// Step next question
function nextQuestion() {
	currentQuestion++;
	if (currentQuestion < questions.length) {
		showQuestion(questions[currentQuestion]);
		number.textContent = currentQuestion + 1;
	} else {
		showResults();
		showAnswers();
		let btn = document.createElement("a");
		btn.innerHTML = 'Retry'
		btn.classList.add('btn-margin')
		btn.setAttribute("href", "index.html")
		answersElement.appendChild(btn)
	}
}

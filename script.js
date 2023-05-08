import { html, css, cssAdvanced, tboot, jsOne } from './quiz.js';
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
    answerElement.classList.add('btn')
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
    answerItem.classList.add('list-item')
    answerItem.innerHTML = `<h2 class="list-item-title">${index + 1}. ${question.question}</h2>`;

    const userAnswer = question.userAnswer;
    const correctAnswer = question.correctAnswer;
    const answerText = question.answers[userAnswer];

    if (userAnswer === undefined) {
      answerItem.innerHTML += `<div class="list-description">Javobingiz: <span style="color:orange">Javob berilmadi</span></div>`;
    } else if (userAnswer === correctAnswer) {
      answerItem.innerHTML += `<div class="list-description"><span class="correct">Javobingiz: ${answerText}</span> - To'g'ri</div>`;
    } else {
      answerItem.innerHTML += `<div class="list-description"><span class="incorrect">Javobingiz: ${answerText}</span> - Xato<br><br>To'gri javob: ${question.answers[correctAnswer]}</div>`;
    }

    answerList.appendChild(answerItem);
  });
  answersElement.appendChild(answerList);
}

function showResults() {
  questionElement.textContent = `Siz ${questions.length}ta savoldan ${score}ta to'g'ri javob berdingiz!`;
  while (answersElement.firstChild) {
    answersElement.removeChild(answersElement.firstChild);
  }
}

function getRandomQuestions(arr) {
  const randomQuestions = [];
  while (randomQuestions.length < 10) {
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
const cssAdvancedBtn = document.querySelector('.css-advanced');
const tBoot = document.querySelector('.tboot-btn');
const jsBoot = document.querySelector('.js-btn');
const mainWrapper = document.querySelector('.main-wrapper');
const result = document.querySelector('#result');

const startQuiz = function(){
  mainWrapper.classList.add('none');
    result.classList.add('block')
    currentQuestion = 0;
    number.textContent = currentQuestion + 1;
    showQuestion(questions[currentQuestion]);
  }
  
  if(htmlBtn){
    htmlBtn.addEventListener('click', function() {
      htmlBtn.classList.add('none');
      questions = getRandomQuestions(html);
    startQuiz()
  });
}

if(cssBtn){
  cssBtn.addEventListener('click', function() {
    cssBtn.classList.add('none');
    questions = getRandomQuestions(css);
    startQuiz()
  });
}

if(cssAdvancedBtn){
  cssAdvancedBtn.addEventListener('click', function() {
    cssAdvancedBtn.classList.add('none');
    questions = getRandomQuestions(cssAdvanced);
    startQuiz()
  });
}

if(tBoot){
  tBoot.addEventListener('click', function() {
    tBoot.classList.add('none');
    questions = getRandomQuestions(tboot);
    startQuiz()
  });
}

if(jsBoot){
  jsBoot.addEventListener('click', function() {
    jsBoot.classList.add('none');
    questions = getRandomQuestions(jsOne);
    startQuiz()
  });
}

// Step next question
function nextQuestion() {
	currentQuestion++;
	if (currentQuestion < questions.length) {
		showQuestion(questions[currentQuestion]);
		number.textContent = currentQuestion + 1;
	} else {
		showResults();
		showAnswers();
    result.classList.remove('block')
		let btn = document.createElement("a");
		btn.innerHTML = 'Bosh sahifa'
		btn.classList.add('btn-margin')
		btn.setAttribute("href", "index.html")
		answersElement.appendChild(btn)
	}
}

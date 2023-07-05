import {
  html,
  css,
  cssAdvanced,
  tboot,
  jsBasic,
  jsDom,
  jsAsync,
  jsObject,
} from "./quiz.js";
let jsGeneral = [...jsBasic, ...jsDom, ...jsAsync, ...jsObject];

// Donate modal
const elDonateBtn = document.querySelector('.donate-js');
const elOverlay = document.querySelector('.overlay');
const elXmark = document.querySelector('.xmark');
const elModal = document.querySelector('.modal');

function openModal() {
  elModal.style.display = 'block';
  elOverlay.style.display = 'block';
}

function closeModal() {
  elModal.style.display = 'none';
  elOverlay.style.display = 'none';
}

elDonateBtn.addEventListener('click', function() {
  openModal();
});

elXmark.addEventListener('click', function() {
  closeModal();
});

window.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

let number = document.querySelector("#number");
let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const htmlTotal = document.querySelector("#html-total");
const cssTotal = document.querySelector("#css-total");
const cssAdvancedTotal = document.querySelector("#css-advanced-total");
const tBootTotal = document.querySelector("#tboot-total");
const jsBasicTotal = document.querySelector("#js-basic-total");
const jsDomTotal = document.querySelector("#js-dom-total");
const jsAsyncTotal = document.querySelector("#js-async-total");
const jsObjectTotal = document.querySelector("#js-object-total");
const jsGeneralTotal = document.querySelector("#js-general-total");
const totalNumber = document.querySelector("#total-number");

if (
  (htmlTotal,
  cssTotal,
  cssAdvancedTotal,
  tBootTotal,
  jsBasicTotal,
  jsDomTotal,
  jsAsyncTotal,
  jsObjectTotal,
  jsGeneralTotal)
) {
  htmlTotal.textContent = `${html.length}ta savol mavjud`;
  cssTotal.textContent = `${css.length}ta savol mavjud`;
  cssAdvancedTotal.textContent = `${cssAdvanced.length}ta savol mavjud`;
  tBootTotal.textContent = `${tboot.length}ta savol mavjud`;
  jsBasicTotal.textContent = `${jsBasic.length}ta savol mavjud`;
  jsDomTotal.textContent = `${jsDom.length}ta savol mavjud`;
  jsAsyncTotal.textContent = `${jsAsync.length}ta savol mavjud`;
  jsObjectTotal.textContent = `${jsObject.length}ta savol mavjud`;
  jsGeneralTotal.textContent = `${jsGeneral.length}ta savol mavjud`;
  totalNumber.textContent =
    html.length +
    css.length +
    cssAdvanced.length +
    tboot.length +
    jsBasic.length +
    jsDom.length +
    jsAsync.length +
    jsObject.length;
}

function showQuestion(question) {
  questionElement.textContent = question.question;

  while (answersElement.firstChild) {
    answersElement.removeChild(answersElement.firstChild);
  }

  question.answers.forEach((answer, index) => {
    const answerElement = document.createElement("button");
    answerElement.classList.add("btn");
    answerElement.textContent = answer;
    answerElement.addEventListener("click", () => {
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
  const answerList = document.createElement("ul");
  questions.forEach((question, index) => {
    const answerItem = document.createElement("li");
    answerItem.classList.add("list-item");
    answerItem.innerHTML = `<h2 class="list-item-title">${index + 1}. ${
      question.question
    }</h2>`;

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
const htmlBtn = document.querySelector(".html-btn");
const cssBtn = document.querySelector(".css-btn");
const cssAdvancedBtn = document.querySelector(".css-advanced");
const tBoot = document.querySelector(".tboot-btn");
const jsBasicBtn = document.querySelector(".js-basic");
const jsDomBtn = document.querySelector(".js-dom-btn");
const jsAsyncBtn = document.querySelector(".js-async-btn");
const jsObjectBtn = document.querySelector(".js-object-btn");
const jsGeneralBtn = document.querySelector(".js-general-btn");
const mainWrapper = document.querySelector(".main-wrapper");
const result = document.querySelector("#result");

const startQuiz = function () {
  mainWrapper.classList.add("none");
  result.classList.add("block");
  currentQuestion = 0;
  number.textContent = currentQuestion + 1;
  showQuestion(questions[currentQuestion]);
};

// show questions when click btns
const btnClickShowQuestions = (btn, arr) => {
  btn.addEventListener("click", function () {
    btn.classList.add("none");
    questions = getRandomQuestions(arr);
    startQuiz();
  });
};
if (htmlBtn) {
  btnClickShowQuestions(htmlBtn, html);
}
if (cssBtn) {
  btnClickShowQuestions(cssBtn, css);
}
if (cssAdvancedBtn) {
  btnClickShowQuestions(cssAdvancedBtn, cssAdvanced);
}
if (tBoot) {
  btnClickShowQuestions(tBoot, tboot);
}
if (jsBasicBtn) {
  btnClickShowQuestions(jsBasicBtn, jsBasic);
}
if (jsDomBtn) {
  btnClickShowQuestions(jsDomBtn, jsDom);
}
if (jsAsyncBtn) {
  btnClickShowQuestions(jsAsyncBtn, jsAsync);
}
if (jsObjectBtn) {
  btnClickShowQuestions(jsObjectBtn, jsObject);
}
if (jsGeneralBtn) {
  btnClickShowQuestions(jsGeneralBtn, jsGeneral);
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
    result.classList.remove("block");
    let btn = document.createElement("a");
    btn.innerHTML = "Bosh sahifa";
    btn.classList.add("btn-margin");
    btn.setAttribute("href", "index.html");
    answersElement.appendChild(btn);
  }
}

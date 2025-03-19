const questions = [
  {
    question: "Wie lautet mein 2. Name?",
    answers: [
      { text: "Noemi", correct: false },
      { text: "Giulia", correct: false },
      { text: "Victoria", correct: true },
      { text: "Antonia", correct: false },
    ],
  },
  {
    question: "Was ist meine Augenfarbe",
    answers: [
      { text: "Blau", correct: false },
      { text: "Grau", correct: false },
      { text: "Grün", correct: false },
      { text: "Braun", correct: true },
    ],
  },
  {
    question: "Welche Motorrad-Marke fahre ich",
    answers: [
      { text: "KTM", correct: false },
      { text: "Honda", correct: true },
      { text: "Husqvarna", correct: false },
      { text: "Yamaha", correct: false },
    ],
  },
  {
    question: "Wo arbeite ich?",
    answers: [
      { text: "Code Crash", correct: false },
      { text: "Code Banger", correct: false },
      { text: "Code Crush", correct: true },
      { text: "Code Plus", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0; // Bei QuizStart/Reset ist CQI auf 0
  score = 0; // Bei QuizStart/Reset ist score auf 0
  nextButton.innterHTML = "Nächste Frage"; // Bei QuizStart/Reset ist Button Text auf "nächste Frage"
  showQuestion(); // Diese Funktion aufrufen
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex]; // wählt 1 Frage mit Index aus
  let questionNo = currentQuestionIndex + 1; // Index der vorherigen Frage +1
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question; // Frage anzeigen lassen bzw. zu HTML hinzufügen in H2

  currentQuestion.answers.forEach((answer) => {
    // Antworten zu Fragen werden abgerufen
    const button = document.createElement("button"); // Antworten werden const button zugewiesen
    button.innerHTML = answer.text; // Antworten werden in jeweilige Buttons hinzugefügt
    button.classList.add("btn"); // Klassenname zu Button hinzufügen
    answerButtons.appendChild(button); // Fügt Button hinzu
    if (answer.correct) {
      button.dataset.correct = answer.correct; // richtig/falsch zu dataset hinzufügen
    }
    button.addEventListener("click", selectAnswer); // wenn man auf Antwort klickt, wird diese Funktion aufgerufen
  });
}

function resetState() {
  //remove all previous answers
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target; // bei Klick wird das ausgewählt Element der Variable hinzugefügt
  const isCorrect = selectedBtn.dataset.correct === "true"; // wenn Dataset "true",
  if (isCorrect) {
    selectedBtn.classList.add("correct"); // dann "correct"
    score++;
  } else {
    selectedBtn.classList.add("incorrect"); //sonst "incorrect"
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Du hast ${score} von ${questions.length} richtig!`;
  nextButton.innerHTML = "Nochmal spielen";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();

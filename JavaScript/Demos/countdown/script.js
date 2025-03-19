// HTML-Elemente abrufen
const inputField = document.getElementById("minutes");
const startBtn = document.getElementById("startbtn");
const stopBtn = document.getElementById("stopbtn");
const timerDisplay = document.getElementById("timerDisplay");

let countdown; // Variable für das Intervall
let timeLeft = 0; // Speichert die verbleibende Zeit in Sekunden

// Funktion zum Starten des Countdowns
function startTimer() {
  const minutes = parseInt(inputField.value); // Eingabe als Zahl umwandeln

  if (isNaN(minutes) || minutes <= 0) {
    alert("Bitte gib eine gültige Zeit in Minuten ein!");
    return;
  }

  timeLeft = minutes * 60; // Minuten in Sekunden umrechnen
  updateDisplay(); // Anzeige sofort aktualisieren

  clearInterval(countdown); // Falls bereits ein Timer läuft, stoppen

  countdown = setInterval(() => {
    timeLeft--; // Eine Sekunde abziehen
    updateDisplay();

    if (timeLeft <= 0) {
      clearInterval(countdown); // Timer stoppen, wenn Zeit abgelaufen ist
      alert("⏳ Zeit ist um!");
    }
  }, 1000);
}

// Funktion zum Stoppen des Countdowns
function stopTimer() {
  clearInterval(countdown); // Stopt den laufenden Timer
}

// Funktion zur Aktualisierung der Anzeige
function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;
}

// Event Listener für Buttons
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);

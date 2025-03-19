// Zugriff auf das HTML-Input-Element mit der ID "display"
const display = document.getElementById("display");

// Funktion, die Eingabewerte (input) an das Display anhängt
function addToDisplay(input) {
  // Der Wert des Display-Felds wird um die Eingabe (input) erweitert.
  display.value += input;
}

// Funktion, um die Berechnung durchzuführen.
function calculate() {
  try {
    // eval() wird verwendet, um den mathematischen Ausdruck im Display zu berechnen.
    // Wenn der Ausdruck gültig ist, wird das Ergebnis im Display angezeigt.
    display.value = eval(display.value);
  } catch (error) {
    // Falls ein Fehler auftritt (z.B. ungültige Eingabe), wird im Display "Error" angezeigt.
    display.value = "Error";
  }
}

// Funktion, um das Display zu leeren (z.B. beim Drücken einer "C"-Taste).
function clearDisplay() {
  // Der Wert des Display-Felds wird auf einen leeren String gesetzt, wodurch es gelöscht wird.
  display.value = "";
}

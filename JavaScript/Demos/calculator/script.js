const display = document.getElementById("display");

// zahlen dem display hinzufügen
function addToDisplay(input) {
  display.value = display.value + input;
}

// berechnen
function calculate() {
  try {
    let result = eval(display.value);
    // resultat auf 9 Dezimalstellen runden
    display.value = parseFloat(result.toFixed(9));
  } catch (error) {
    display.value = "error";
  }
}

// display leeren
function clearDisplay() {
  display.value = "";
}

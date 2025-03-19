const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Task hinzufügen
function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

// bei Klick auf Task geht wird es durchgestrichen und Icon wechselt
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// button, um alle tasks zu löschen
function deleteAll() {
  let listContainer = document.getElementById("list-container"); // Wählt <ul>-Element aus, in dem  Aufgaben gespeichert sind
  listContainer.innerHTML = ""; //  Setzt HTML-Inhalt der Liste auf leer, wodurch alle li-Elemente entfernt werden
}

// Funktion, um Daten zu speichern, wenn Fenster refreshed oder geschlossen wird

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// Funktion, um gepseicherte Daten wieder anzuzeigen

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

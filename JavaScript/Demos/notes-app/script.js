// Referenz auf HTML-Elemente
const addNoteBtn = document.getElementById("addNoteBtn"); // Knopf zum Hinzufügen einer neuen Notiz
const newNote = document.getElementById("newNote"); // Eingabefeld für die Notiz
const notesContainer = document.getElementById("notesContainer"); // Container, um Notizen anzuzeigen
const themeToggle = document.getElementById("themeToggle"); // Knopf zum Wechseln Dark/Light

let editingNoteIndex = null; // Index der Notiz, die bearbeitet wird, null bedeutet keine Bearbeitung

// Beim Laden der Seite: gespeicherte Notizen aus dem localStorage laden und anzeigen
window.addEventListener("load", () => {
  const savedNotes = JSON.parse(localStorage.getItem("notes")) || []; // gespeicherte Notizen holen (oder leeres Array, wenn keine vorhanden)
  savedNotes.forEach((note, index) => createNoteElement(note, index)); // Jede Notiz wird auf der Seite angezeigt
});

// Wenn der "Add Note"-Button geklickt wird, neue Notiz hinzufügen oder aktualisieren eine bestehende Notiz
addNoteBtn.addEventListener("click", () => {
  const noteText = newNote.value; // Den Text der neuen Notiz holen
  if (noteText.trim() === "") return; // Wenn das Textfeld leer ist, machen wir nichts

  // Wenn wir eine Notiz bearbeiten, aktualisieren wir sie
  if (editingNoteIndex !== null) {
    updateNoteInLocalStorage(noteText, editingNoteIndex); // Notiz im localStorage aktualisieren
    resetInput(); // Eingabefeld zurücksetzen
  } else {
    createNoteElement(noteText); // Neue Notiz auf der Seite erstellen
    saveNoteToLocalStorage(noteText); // Neue Notiz im localStorage speichern
  }
  newNote.value = ""; // Eingabefeld nach dem Hinzufügen leeren
});

// Funktion, um HTML-Element  eine Notiz zu erstellen und anzuzeigen
function createNoteElement(text, index = null) {
  const noteDiv = document.createElement("div"); // Neues div-Element für die Notiz erstellen
  noteDiv.classList.add("note"); // Klasse "note" für die Gestaltung hinzufügen

  const noteText = document.createElement("pre"); // Neues <pre>-Element für den Text der Notiz erstellen
  noteText.textContent = text; // Den Text der Notiz hinzufügen

  // Button zum Bearbeiten der Notiz erstellen
  const editBtn = document.createElement("button");
  editBtn.textContent = "bearbeiten"; // Text für den Button
  editBtn.addEventListener(
    "click",
    () => editNote(text, index || getNoteIndex(text)) // Funktion zum Bearbeiten der Notiz aufrufen
  );

  // Button zum Löschen der Notiz erstellen
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "löschen"; // Text für den Button
  deleteBtn.addEventListener("click", () => {
    noteDiv.remove(); // Notiz aus der Anzeige entfernen
    deleteNoteFromLocalStorage(text); // Notiz aus dem localStorage löschen
  });

  // Alle Teile der Notiz zum noteDiv hinzufügen
  noteDiv.appendChild(noteText);
  noteDiv.appendChild(editBtn);
  noteDiv.appendChild(deleteBtn);
  notesContainer.appendChild(noteDiv); // Die Notiz im Container anzeigen
}

// Funktion zum Speichern einer Notiz im localStorage
function saveNoteToLocalStorage(note) {
  const notes = JSON.parse(localStorage.getItem("notes")) || []; // Alle Notizen aus dem localStorage holen
  notes.push(note); // Die neue Notiz zum Array hinzufügen
  localStorage.setItem("notes", JSON.stringify(notes)); // Das Array zurück im localStorage speichern
}

// Funktion zum Aktualisieren einer Notiz im localStorage
function updateNoteInLocalStorage(newText, index) {
  const notes = JSON.parse(localStorage.getItem("notes")); // Alle Notizen aus dem localStorage holen
  notes[index] = newText; // Die Notiz an der angegebenen Stelle im Array ersetzen
  localStorage.setItem("notes", JSON.stringify(notes)); // Das aktualisierte Array im localStorage speichern

  // Alle Notizen neu anzeigen, nachdem eine bearbeitet wurde
  notesContainer.innerHTML = "";
  notes.forEach((note, i) => createNoteElement(note, i)); // Alle Notizen neu erstellen und anzeigen
  editingNoteIndex = null; // Bearbeitung zurücksetzen
}

// Funktion zum Löschen einer Notiz aus dem localStorage
function deleteNoteFromLocalStorage(note) {
  const notes = JSON.parse(localStorage.getItem("notes")) || []; // Alle Notizen aus dem localStorage holen
  const updatedNotes = notes.filter((n) => n !== note); // Die zu löschende Notiz aus dem Array entfernen
  localStorage.setItem("notes", JSON.stringify(updatedNotes)); // Das aktualisierte Array im localStorage speichern
}

// Funktion zum Bearbeiten einer Notiz
function editNote(text, index) {
  newNote.value = text; // Den Text der Notiz in das Eingabefeld setzen
  editingNoteIndex = index; // Den Index der bearbeiteten Notiz speichern
  addNoteBtn.textContent = "Notiz aktualisieren"; // Den Button-Text auf "Update Note" ändern
}

// Funktion, um den Index einer Notiz anhand des Textes zu bekommen
function getNoteIndex(text) {
  const notes = JSON.parse(localStorage.getItem("notes")); // Alle Notizen aus dem localStorage holen
  return notes.indexOf(text); // Den Index der Notiz finden und zurückgeben
}

// Eingabefeld zurücksetzen und den Button-Text auf "Add Note" ändern
function resetInput() {
  newNote.value = ""; // Das Eingabefeld leeren
  addNoteBtn.textContent = "hinzufügen"; // Den Button-Text zurücksetzen
}

// Event-Listener für den "Theme Toggle"-Button (Dunkel- / Hellmodus wechseln)
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark"); // Die Klasse "dark" am <body>-Tag hinzufügen/entfernen
  themeToggle.textContent = document.body.classList.contains("dark") // Icon ändern
    ? "☀️" // Wenn im Dunkelmodus, den Text auf ☀️ setzen
    : "🌙"; // Wenn im Hellmodus, den Text auf 🌙 setzen
});

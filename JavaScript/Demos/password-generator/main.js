// Funktion zum Generieren eines zufälligen Passworts
function generatePassword() {
  // Erlaubte Zeichen für das Passwort (Grossbuchstaben, Kleinbuchstaben, Zahlen und Sonderzeichen)
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

  // Länge von 12 Zeichen für das Passwort festlegen
  const passwordLength = 12;

  // Start mit einem leeren Passwort-String
  let password = "";

  // Schleife läuft 12-mal, da das Passwort 12 Zeichen lang sein soll
  for (let i = 0; i < passwordLength; i++) {
    // zufällige Zahl erzeugen, die zwischen 0 und der Länge des Zeichen-Arrays liegt
    const randomIndex = Math.floor(Math.random() * characters.length);

    // zufälliges Zeichen an Passwort anfügen
    password += characters[randomIndex];
  }

  // Nachdem das Passwort erstellt wurde, wird es ins Textfeld (textarea) eingefügt
  document.getElementById("textarea").value = password;
}

// Event-Listener hinzufügen, der auf "Passwort generieren"-Button reagiert
document.querySelector(".btn").addEventListener("click", generatePassword);

// Event-Listener für das Kopieren des Passworts
document.querySelector(".copy-icon").addEventListener("click", function () {
  // Inhalt des Textfeldes auswählen
  const textarea = document.getElementById("textarea");
  textarea.select(); // Text im Textarea auswählen

  // Mit der modernen Clipboard API den Text kopieren
  navigator.clipboard.writeText(textarea.value).then(function () {
    // Erfolgreiches Kopieren: Bestätigung anzeigen
    const copyMessage = document.getElementById("copyMessage");
    copyMessage.textContent = "Passwort kopiert!";
    copyMessage.style.display = "block";

    // Nachricht nach 3 Sekunden wieder ausblenden
    setTimeout(function () {
      copyMessage.style.display = "none";
    }, 3000);
  });
});

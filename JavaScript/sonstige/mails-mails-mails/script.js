const button = document.getElementById("button");
const imageContainer = document.getElementById("image-container");

button.addEventListener("click", function (event) {
  event.stopPropagation(); // Verhindert, dass der Klick das Bild sofort schließt

  // Falls das Bild bereits existiert, nichts tun
  if (imageContainer.querySelector("img")) return;

  // Bild-Element erstellen
  const newImg = document.createElement("img");
  newImg.src = "images/party-parrot.gif"; // Bildpfad anpassen
  newImg.alt = "sorry han verkackt, Bild kann grat nit glada werda... 😅";

  // Bildgrößen setzen
  newImg.style.width = "500px";
  newImg.style.maxWidth = "100%";

  // Bild in Container einfügen
  imageContainer.appendChild(newImg);

  // Button ausblenden
  button.classList.add("hidden");

  // Event-Listener hinzufügen: Klick außerhalb des Bildes entfernt das Bild
  setTimeout(() => {
    document.addEventListener("click", removeImage);
  }, 100); // Kurze Verzögerung, um direkten Schließen zu verhindern
});

function removeImage(event) {
  if (!imageContainer.contains(event.target)) {
    imageContainer.innerHTML = ""; // Bild entfernen
    button.classList.remove("hidden"); // Button wieder anzeigen
    document.removeEventListener("click", removeImage); // Event-Listener entfernen
  }
}

window.addEventListener("load", function () {
  document.getElementById("preloader").style.display = "none";
  document.getElementById("content").style.display = "block";
});

const api_url = "https://meme-api.com/gimme"; // Die API URL für ein zufälliges Meme

async function getMeme() {
  try {
    const response = await fetch(api_url);
    const data = await response.json(); // Antwort als JSON parsen

    if (data && data.url) {
      const memeUrl = data.url; // Meme-URL extrahieren

      const memeImg = document.querySelector(".meme-img");
      const loadingText = document.querySelector(".img-container p");

      // Bild im Hintergrund laden
      const img = new Image();
      img.src = memeUrl;
      img.onload = () => {
        memeImg.src = memeUrl; // Meme-Bild anzeigen
        loadingText.style.display = "none"; // Lade-Text ausblenden
      };
    } else {
      console.error("Kein Meme gefunden.");
    }
  } catch (error) {
    console.error("Fehler beim Abrufen des Memes:", error);
  }
}

// Funktion direkt beim Laden der Seite ausführen
getMeme();

// Falls du einen Button hast, um ein neues Meme zu laden:
document.getElementById("btn1").addEventListener("click", function () {
  getMeme();
});

// Share-Button aktivieren
document.getElementById("btn2").addEventListener("click", async () => {
  const memeImage = document.querySelector(".meme-img").src; // Meme-URL abrufen

  if (navigator.share) {
    // Web Share API ist verfügbar
    try {
      await navigator.share({
        title: "Lucindas Meme Generator 😎",
        text: "Lustiges Meme!",
        url: memeImage, // Bild-URL teilen
      });
      console.log("Meme wurde erfolgreich geteilt! 🎉");
    } catch (error) {
      console.error("❗️ Teilen fehlgeschlagen:", error);
    }
  } else {
    // Falls Teilen nicht unterstützt wird, URL kopieren
    navigator.clipboard.writeText(memeImage);
    alert("Meme-URL wurde in die Zwischenablage kopiert! 📋");
  }
});

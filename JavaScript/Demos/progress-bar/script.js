let number = document.getElementById('number')
let progressCircle = document.querySelector('circle')
let inputField = document.getElementById('inputValue')
let errorMessage = document.getElementById('error-message') // Assuming you have an element to display the error message

const circumference = 2 * Math.PI * 70 // Umfang des Kreises (2 * π * Radius)

// Event Listener für Eingabe
inputField.addEventListener('input', () => {
    let rawValue = inputField.value
    if (rawValue > 100) {
        errorMessage.innerHTML = "Zahl muss zwischen 1-100 sein"
        return
    } else {
        errorMessage.innerHTML = ""
        let targetValue = Math.min(Math.max(rawValue, 0), 100) // Begrenze zwischen 0-100
        setTimeout(() => {
            animateProgress(targetValue)
        }, 200)
    }
})

// Funktion zum animierten Fortschritt
function animateProgress (target) {
    let counter = 0
    let interval = setInterval(() => {
        if (counter >= target) {
            clearInterval(interval)
        } else {
            counter += 1
            number.innerHTML = counter + '%'

            // Berechnung für den Fortschritt
            let progress = (1 - counter / 100) * circumference
            progressCircle.style.strokeDashoffset = progress
        }
    }, 15) // Geschwindigkeit der Animation
}

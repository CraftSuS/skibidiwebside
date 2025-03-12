// script.js

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Zapobiega domyślnemu wysyłaniu formularza

    // Prosta walidacja formularza
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Sprawdzenie, czy pola są wypełnione
    if (email && password) {
        // Uruchomienie animacji - znikanie formularza
        document.querySelector(".login-box").style.opacity = "0";
        
        // Dodanie animacji dla przycisku (dla efektu kliknięcia)
        let button = document.getElementById("loginButton");
        button.style.pointerEvents = "none"; // Zablokowanie kliknięcia przycisku po wysłaniu formularza
        
        // Po 1.5 sekundy (po zakończeniu animacji) przekierowanie
        setTimeout(function() {
            window.location.href = "https://youtu.be/xvFZjo5PgG0?si=moMkbZ_o-qZgHfHF"; // Przekierowanie na YouTube
        }, 1500); // Po 1.5 sekundzie (czas animacji)
    } else {
        // Jeśli pola są puste, wyświetl komunikat o błędzie
        document.getElementById("error-message").textContent = "Proszę wypełnić oba pola!";
        document.getElementById("error-message").style.display = "block";
    }
});

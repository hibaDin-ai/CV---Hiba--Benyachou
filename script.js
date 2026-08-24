
const darkModeBtn = document.getElementById('toggle-dark-mode');


darkModeBtn.addEventListener('click', () => {
    // Échange la classe "dark-theme" sur la balise <body>
    document.body.classList.toggle('dark-theme');
    
    // Change le texte du bouton selon le mode actif
    if (document.body.classList.contains('dark-theme')) {
        darkModeBtn.textContent = " Mode Clair";
    } else {
        darkModeBtn.textContent = " Mode Sombre";
    }
});
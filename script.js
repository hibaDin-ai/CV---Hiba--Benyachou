// 1. Sélection du bouton
const darkModeBtn = document.getElementById('toggle-dark-mode');

// 2. Vérification du choix précédent de l'utilisateur au chargement de la page
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    darkModeBtn.textContent = " Mode Clair";
} else {
    document.body.classList.remove('dark-theme');
    darkModeBtn.textContent = " Mode Sombre";
}

// 3. Écoute de l'événement "click"
darkModeBtn.addEventListener('click', () => {
    // Échange la classe "dark-theme" sur la balise <body>
    document.body.classList.toggle('dark-theme');
    
    // Initialisation de la variable de stockage
    let theme = 'light';
    
    // Change le texte du bouton et enregistre la préférence
    if (document.body.classList.contains('dark-theme')) {
        darkModeBtn.textContent = " Mode Clair";
        theme = 'dark';
    } else {
        darkModeBtn.textContent = " Mode Sombre";
    }
    
    // Sauvegarde le choix dans le navigateur de l'utilisateur
    localStorage.setItem('theme', theme);
});

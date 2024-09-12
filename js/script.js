// Sélectionner les éléments
const showImageBtn = document.getElementById('showImageBtn');
const imageContainer = document.getElementById('imageContainer');
const profileImage = document.getElementById('profileImage');
const cardContainer = document.getElementById('cardContainer');

// Ajouter un événement click pour afficher l'image
showImageBtn.addEventListener('click', function() {
    imageContainer.classList.remove('hidden');
});

// Ajouter un événement double click pour afficher/masquer les coordonnées
profileImage.addEventListener('dblclick', function() {
    // Vérifier si la carte est cachée, si oui, l'afficher
    if (cardContainer.classList.contains('hidden')) {
        cardContainer.classList.remove('hidden');
    } else {
        cardContainer.classList.add('hidden'); // Masquer la carte si elle est visible
    }
});

// Événement mousemove pour changer la couleur de l'image
profileImage.addEventListener('mousemove', function() {
    profileImage.style.filter = 'grayscale(100%)'; // Applique un filtre pour changer la couleur
});

// Événement mouseout pour réinitialiser la couleur de l'image
profileImage.addEventListener('mouseout', function() {
    profileImage.style.filter = 'none'; // Réinitialise le filtre
});
 // Démarrer l'animation de la carte
 document.querySelector('.card').classList.add('animate');
// Fonction pour double-cliquer pour animer la carte
document.querySelector('.card').addEventListener('dblclick', function() {
    // L'animation se déclenche lorsque la carte est double-cliquée
    this.classList.add('animate');
});
// Liste des couleurs à appliquer
const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#F0FF33'];

// Fonction pour changer la couleur de la carte
function changeCardColor() {
    const card = document.querySelector('.card');
    // Choisir une couleur aléatoire
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    // Appliquer la couleur de fond
    card.style.backgroundColor = randomColor;
}

// Ajouter un événement de clic au bouton pour changer la couleur de la carte
document.getElementById('showImageBtn').addEventListener('click', function() {
    document.getElementById('imageContainer').classList.remove('hidden');
    document.getElementById('cardContainer').classList.remove('hidden');
    // Changer la couleur de la carte à chaque clic
    changeCardColor();
});

// Ajouter un événement de double clic à la carte pour changer la couleur
document.querySelector('.card').addEventListener('dblclick', function() {
    changeCardColor();
});

// Liste des couleurs à appliquer

// Fonction pour changer la couleur de la carte
function changeCardColor() {
    const card = document.querySelector('.card');
    // Choisir une couleur aléatoire
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    // Appliquer la couleur de fond avec !important pour garantir que le style est appliqué
    card.style.setProperty('background-color', randomColor, 'important');
}

// Ajouter un événement de clic au bouton pour changer la couleur de la carte
document.getElementById('showImageBtn').addEventListener('click', function() {
    document.getElementById('imageContainer').classList.remove('hidden');
    document.getElementById('cardContainer').classList.remove('hidden');
    // Changer la couleur de la carte à chaque clic
    changeCardColor();
});

// Ajouter un événement de double clic à la carte pour changer la couleur
document.querySelector('.card').addEventListener('dblclick', function() {
    changeCardColor();
});
// Liste des couleurs à appliquer

// Liste des formes possibles

// Fonction pour changer la couleur et la forme de la carte
function changeCardAppearance() {
    const card = document.querySelector('.card');
    // Choisir une couleur aléatoire
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    // Choisir une forme aléatoire
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    // Appliquer la couleur de fond et la forme avec !important pour garantir que le style est appliqué
    card.style.setProperty('background-color', randomColor, 'important');
    card.style.setProperty('border-radius', randomShape, 'important');
}

// Ajouter un événement de clic au bouton pour changer la couleur et la forme de la carte
document.getElementById('showImageBtn').addEventListener('click', function() {
    document.getElementById('imageContainer').classList.remove('hidden');
    document.getElementById('cardContainer').classList.remove('hidden');
    // Changer l'apparence de la carte à chaque clic
    changeCardAppearance();
});

// Ajouter un événement de double clic à la carte pour changer la couleur et la forme
document.querySelector('.card').addEventListener('dblclick', function() {
    changeCardAppearance();
});
// Liste des couleurs à appliquer

// Liste des formes possibles (CSS class names)

// Fonction pour changer la couleur et la forme de la carte
function changeCardAppearance() {
    const card = document.querySelector('.card');
    // Choisir une couleur aléatoire
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    // Choisir une forme aléatoire
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    
    // Réinitialiser les classes de forme
    card.classList.remove('circle', 'rectangle', 'triangle', 'star', 'flower');
    // Ajouter la nouvelle forme
    card.classList.add(randomShape);
    
    // Appliquer la couleur de fond
    card.style.setProperty('background-color', randomColor, 'important');
}

// Ajouter un événement de clic au bouton pour changer la couleur et la forme de la carte
document.getElementById('showImageBtn').addEventListener('click', function() {
    document.getElementById('imageContainer').classList.remove('hidden');
    document.getElementById('cardContainer').classList.remove('hidden');
    // Changer l'apparence de la carte à chaque clic
    changeCardAppearance();
});

// Ajouter un événement de double clic à la carte pour changer la couleur et la forme
document.querySelector('.card').addEventListener('dblclick', function() {
    changeCardAppearance();
});
// Liste des couleurs à appliquer

// Liste des formes possibles (CSS class names)
const shapes = ['circle', 'rectangle', 'triangle', 'star', 'flower'];

// Fonction pour changer la couleur et la forme de la carte
function changeCardAppearance() {
    const card = document.querySelector('.card');
    // Choisir une couleur aléatoire
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    // Choisir une forme aléatoire
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    
    // Réinitialiser les classes de forme
    card.classList.remove('circle', 'rectangle', 'triangle', 'star', 'flower');
    // Ajouter la nouvelle forme
    card.classList.add(randomShape);
    
    // Appliquer la couleur de fond
    card.style.setProperty('background-color', randomColor, 'important');
}

// Ajouter un événement de clic au bouton pour changer la couleur et la forme de la carte
document.getElementById('showImageBtn').addEventListener('click', function() {
    document.getElementById('imageContainer').classList.remove('hidden');
    document.getElementById('cardContainer').classList.remove('hidden');
    // Changer l'apparence de la carte à chaque clic
    changeCardAppearance();
});

// Ajouter un événement de double clic à la carte pour changer la couleur et la forme
document.querySelector('.card').addEventListener('dblclick', function() {
    changeCardAppearance();
});

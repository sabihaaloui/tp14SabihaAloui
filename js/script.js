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

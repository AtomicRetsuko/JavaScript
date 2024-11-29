const tableau = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const tableau2 = tableau.concat(tableau);
const tableau3 = tableau2.sort(() => Math.random() - 0.5);
const tableau4 = tableau3.map(el => `<div data-id="${el}"><img src="img/${el}.webp"></div>`).join('');
document.querySelector('.container').innerHTML = tableau4;

// Variables pour gérer l'état des clics
let firstSelection = null;
let secondSelection = null;

document.querySelectorAll('.container div').forEach(el => {
    el.addEventListener('click', () => {
        // Ignorer si l'élément est déjà sélectionné ou a déjà disparu
        if (el.classList.contains('green') || el.style.visibility === 'hidden') return;

        // Ajouter la classe "green" pour indiquer la sélection
        el.classList.add('green');

        // Si c'est la première sélection
        if (!firstSelection) {
            firstSelection = el;
        } else if (!secondSelection) { // Si c'est la deuxième sélection
            secondSelection = el;

            // Comparer les deux sélections
            const firstId = firstSelection.getAttribute('data-id');
            const secondId = secondSelection.getAttribute('data-id');

            if (firstId === secondId) {
                // Si les IDs sont identiques, faire disparaître les deux
                setTimeout(() => {
                    firstSelection.style.visibility = 'hidden';
                    secondSelection.style.visibility = 'hidden';
                    resetSelection();
                }, 500); // Délai pour voir l'effet de sélection avant la disparition
            } else {
                // Sinon, retirer la classe "green" des deux
                setTimeout(() => {
                    firstSelection.classList.remove('green');
                    secondSelection.classList.remove('green');
                    resetSelection();
                }, 500); // Délai pour voir les deux images avant qu'elles ne soient désélectionnées
            }
        }
    });
});

// Fonction pour réinitialiser les sélections
function resetSelection() {
    firstSelection = null;
    secondSelection = null;
}
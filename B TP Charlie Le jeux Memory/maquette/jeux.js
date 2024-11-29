// A compléter ....

const tableau = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const tableau2 = tableau.concat(tableau);
const tableau3 = tableau2.sort(() => Math.random() - 0.5);
const tableau4 = tableau3.map(el => `<div><img src="img/${el}.webp"></div>`).join('');
document.querySelector('.container').innerHTML = tableau4;

document.querySelectorAll('.container div').forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle('green');
    })
})
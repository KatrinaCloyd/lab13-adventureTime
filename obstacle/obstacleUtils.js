import { getUserStats } from '../utils/storageUtils.js';
import { renderUserHdr } from '../utils/headerUtil.js';
import { findById } from '../utils/utils.js';
import obstacles from '../data/obstacle-data.js';

const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const img = document.querySelector('section img');
const p = document.querySelector('p');
const form = document.querySelector('form');

const params = new URLSearchParams(window.location.search);
const obstId = params.get('id');
const obstacle = findById(obstId, obstacles);

const user = getUserStats();

renderUserHdr(user);

h2.textContent = obstacle.id;
h3.textContent = obstacle.title;
img.src = `../assets/${obstacle.id}.jpg`;
p.textContent = obstacle.story;

for (let choice of obstacle.choices) {
    const radio = document.createElement('input');
    const span = document.createElement('span');
    radio.type = 'radio';
    radio.name = 'choices';
    radio.value = choice.id;
    span.textContent = choice.description;
    form.append(radio, span);
}

const btn = document.createElement('button');
btn.textContent = 'sumbit';
form.append(btn);

form.addEventListener('sumbit', (e) => {
    e.preventDefault();
    //will need to calc users new stats here 
    window.location = '../map/index.html';
});


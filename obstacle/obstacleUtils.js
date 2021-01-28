import { getUserStats, setUserStats } from '../utils/storageUtils.js';
import { renderUserHdr } from '../utils/headerUtil.js';
import { findById } from '../utils/utils.js';
import obstacles from '../data/obstacle-data.js';

const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const img = document.querySelector('section img');
const p = document.querySelector('p');
const form = document.querySelector('form');
const submitBtn = document.querySelector('button');

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

//const btn = document.createElement('button');
//btn.textContent = 'Give It A Go!';
//form.appendChild(btn);

submitBtn.addEventListener('click', () => {
    //will need to calc users new stats here 
    const formData = new FormData(form);
    const selectionId = formData.get('choices');
    const choiceArr = findById(selectionId, obstacle.choices);
    user.friends += choiceArr.friends;
    user.health += choiceArr.health;
    user.snacks += choiceArr.snacks;
    setUserStats(user);
    window.location = '../map/index.html';
});


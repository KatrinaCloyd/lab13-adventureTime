import obstacles from '../data/obstacle-data.js';

const ul = document.querySelector('ul');

for (let obstacle of obstacles) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = obstacle.id;
    a.href = '../quest/?id=${obstacle.id}';
    li.append(a);
    ul.append(li);
}
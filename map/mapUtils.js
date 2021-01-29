import { getUserStats } from '../utils/storageUtils.js';
import { renderUserHdr } from '../utils/headerUtil.js';
import obstacles from '../data/obstacle-data.js';

const ul = document.querySelector('ul');
const user = getUserStats();

renderUserHdr(user);

if (user.health <= 0) {
    window.location = '../results/index.html';
}

let completedAllQuests = true;

for (let obs of obstacles) {
    if (!user.completed[obs.id]) {
        completedAllQuests = false;
    }
}

if (completedAllQuests) {
    window.location = '../results/index.html';
}

for (let obstacle of obstacles) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const icon = document.createElement('img');
    icon.classList = 'icon';
    icon.src = `../assets/${obstacle.id}Icon.png`;
    icon.href = `../obstacle/?id=${obstacle.id}`;
    a.textContent = obstacle.id;
    a.style.display = 'block';
    a.href = `../obstacle/?id=${obstacle.id}`;
    if (user.completed[obstacle.id] === true) {
        icon.src = `../assets/DONE.png`;

    }
    icon.append(a);
    li.append(icon, a);
    ul.append(li);
}

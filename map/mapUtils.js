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
    a.textContent = obstacle.id;
    a.href = `../obstacle/?id=${obstacle.id}`;
    li.append(a);
    ul.append(li);
}

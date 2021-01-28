import { getUserStats } from '../utils/storageUtils.js';
import { renderUserHdr } from '../utils/headerUtil.js';
import obstacles from '../data/obstacle-data.js';

const ul = document.querySelector('ul');
const user = getUserStats();
renderUserHdr(user);

for (let obstacle of obstacles) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = obstacle.id;
    a.href = `../obstacle/?id=${obstacle.id}`;
    li.append(a);
    ul.append(li);
}

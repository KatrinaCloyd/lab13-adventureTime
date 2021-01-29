import { setUserStats } from './utils/storageUtils.js';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const user = {
        name: formData.get('userName'),
        character: formData.get('character'),
        health: 50,
        snacks: 20,
        friends: 3,
        completed: {},
    };
    setUserStats(user);
    window.location = './map/index.html';
});


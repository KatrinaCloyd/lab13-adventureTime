const hdr = document.getElementById('headerStats');

export function renderUserHdr(user) {
    const h3 = document.createElement('h3');
    h3.textContent = user.name;
    const hdImg = document.createElement('img');
    hdImg.src = '../assets/' + user.character + '.jpg';
    hdImg.classList.add('charIcon');

    const div = document.createElement('div');
    const pHealth = document.createElement('p');
    pHealth.textContent = 'Heatlh:' + user.health;
    const pFriends = document.createElement('p');
    pFriends.textContent = 'Friends:' + user.friends;
    const pSnacks = document.createElement('p');
    pSnacks.textContent = 'Snacks:' + user.snacks;

    div.append(pHealth, pFriends, pSnacks);
    hdr.append(h3, hdImg, div);

}

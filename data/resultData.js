const dead = {
    id: 1,
    title: 'You\'ve Died!',
    message: 'Looks like you need to make better choices, don\'t you?',
    image: '../assets/dead.jpg'
};

const healthyAllFriends = {
    id: 2,
    title: 'Healthy With All Your Friends!',
    message: 'You\'ve managed to make it back to the house with all of your friends and in good health! Turns out snacks aren\'t as important as I thought.',
    image: '../assets/alive.jpg'
};

const healthySomeFriends = {
    id: 3,
    title: 'Healthy With Some Friends',
    message: 'You\'ve managed to make it back to the house in good health! But you\'ve lost a few of your friends in the process... At least you\'re home!',
    image: '../assets/someDead.jpg'
};

const healthyNoFriends = {
    id: 4,
    title: 'Healthy But No Friends',
    message: 'You\'ve managed to make it back to the house in good health! But you\'ve lost all of your friends in the process... I\'ve created a self cenetered tiny monster. Maybe we will just leave you small.',
    image: '../assets/noFriends.jpg'
};

const meh = {
    id: 5,
    title: 'Meh.. you did okay...',
    message: 'Well, you made it home. You aren\'t super healthy or super sick. Whatever, I guess I\'m glad you\'re home.',
    image: '../assets/sick.jpg'
};

const sickAllFriends = {
    id: 6,
    title: 'Sick But With All Your Friends!',
    message: 'You\'ve managed to make it back to the house! You aren\'t in great shape, but you watched out for your firends, so that counts for something! Snacks on teh other hand didn\'t matter at all.',
    image: '../assets/alive.jpg'
};

const sickAlone = {
    id: 7,
    title: 'Sick and Alone',
    message: 'You\'ve managed to make it back to the house! But your\'re sick and you\'ve lost all of your friends in the process... you may need to rethink your decision making. ',
    image: '../assets/sickAlone.jpg'
};

const sick = {
    id: 8,
    title: 'Sick and Missing Friends',
    message: 'You\'ve managed to make it back to the house! You\'re in really bad shape and you lost some friends along the way. So... good for you...? ',
    image: '../assets/sick.jpg'
};

const results = [
    dead,
    healthyAllFriends,
    healthySomeFriends,
    healthyNoFriends,
    meh,
    sickAllFriends,
    sickAlone,
    sick,
];

export default results; 
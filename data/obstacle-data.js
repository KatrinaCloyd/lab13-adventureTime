const rain = {
    id: 'rain',
    title: 'Uhh oh, looks like it\'s starting to rain!',
    image: '../assets/dad.png',
    story: 'It has started raining, and it looks like you are right in the middle of the biggest puddle in the backyard. You\'ll never get out of the puddle in time, it\'s too big. But that oaf you are with can\'t swim. What do you do?',
    map: {
        top: '89%',
        left: '44%'
    },
    choices: [{
        id: 'swim',
        description: 'Wait out the rain, it never rains enough to get too deep. If it does... you know how to swim!',
        message: 'Well it got deep and you were able to swim out, but everyone else didn\'t. Now you are down a friend.',
        health: -10,
        snacks: 0,
        friends: -1,
    },
    {
        id: 'rideCigarette',
        description: 'Hey, there\'s a cigarette butt! Shh... don\'t tell Dad. Maybe you can all float on that!',
        message: 'Well it did float and you all made it out, but that was terrible and now you are all coughing alot.',
        health: -20,
        snacks: 0,
        friends: 0,
    },
    {
        id: 'rideCookie',
        description: 'You have a huge stale cookie from the trash you were hoping to save for snacks. Maybe you can all float on that!',
        message: 'It floated well enough to get you all out of the puddle, but now you\'ve got no snacks for later.',
        health: 0,
        snacks: -5,
        friends: 0,
    },
    ],
};

const lawnmower = {
    id: 'lawnmower',
    title: 'Dad is mowing the grass!',
    image: '../assets/dad.png',
    story: 'Dad hasn\'t realized yet that you have been shrunken down and are here in the backyard. So he is grumbling while he does YOUR chores for you. See? This is why you do your chores when you are told to!',
    choices: [{
        id: 'hide',
        description: 'There is some kind of bug hole nearby. Hide there from the blades over head.',
        message: 'Well you are safe from the lawnmower but there is an angry ant colony living here and you lost some of  your stashed snacks to the queen.',
        health: 0,
        snacks: -5,
        friends: 0,
    },
    {
        id: 'yell',
        description: 'Yell for help! Maybe he\'ll hear you!',
        message: 'You are rediculous. He can\'t hear you over the mower when you are full sized! You took a beating from those blades.',
        health: -20,
        snacks: 0,
        friends: 0,
    },
    {
        id: 'run',
        description: 'You are pretty fast! Maybe you can out run the mower! RUN!!!!!!!!!',
        message: 'Well you were fast enough to make it out safe. But not everyone is as fast as you are. You\'ve lost a friend!',
        health: +5,
        snacks: 0,
        friends: -1,
    },
    ],
};
const raccoon = {
    id: 'raccoon',
    title: 'Trash Panda Alert!',
    image: '../assets/dad.png',
    story: 'Those racoons damn are back again! They are cute from affar when they aren\'t the size of houses! And they look hungry. What do you do?',
    choices: [{
        id: 'fight',
        description: 'Throw sticks and stones at him till he runs away!',
        message: 'Really?! C\'mon! He bit you and now you are down more friends!',
        health: -20,
        snacks: -5,
        friends: -2,
    },
    {
        id: 'run',
        description: 'Run for it!! You are fast remember!',
        message: 'Nice! It was a lazy trash panda and it didn\'t follow you!',
        health: 5,
        snacks: 0,
        friends: 0,
    },
    {
        id: 'feed',
        description: 'Give him some of your snacks so he leaves you alone.',
        message: 'Okay, he seemed happy with that but now you have no snacks and you are getting HUNGRY!',
        health: -5,
        snacks: -10,
        friends: 0,
    },
    ],
};
const dog = {
    id: 'dog',
    title: 'Hey, There\'s your Doggo!!',
    image: '../assets/dad.png',
    story: 'You pupper was let out in the yard. He scared away the racoons! He loves you so, he can smell you even though your are so tiny. What do you do?',
    choices: [{
        id: 'ride',
        description: 'Grab on to his fur and hope he goes back in the house!',
        message: 'He does go back in, but after a full sniff tour of the whole yard! That took a lot out of you!',
        health: -10,
        snacks: 0,
        friends: 0,
    },
    {
        id: 'call',
        description: 'Call him. Dog\'s ears are better. Maybe he can hear you calling him!',
        message: 'Yes! He heard you. But then he tried to give you kisses. And you lost a friend to the slobber. But hey, he took the rest of you into the house!',
        health: 0,
        snacks: 0,
        friends: -1,
    },
    {
        id: 'feed',
        description: 'He is so treat motivated, give him your snacks!',
        message: 'Yes! Now he will do whatever you want him to do! It the house you go!',
        health: 0,
        snacks: -10,
        friends: 0,
    },
    ],
};

const obstacles = [
    lawnmower,
    rain,
    raccoon,
    dog
];

export default obstacles; 
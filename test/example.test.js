// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { findById } from '../utils/utils.js';
import obstacles from '../data/obstacle-data.js';

const test = QUnit.test;

test('findById should return entire rain obstacle object when given id of ', (expect) => {
    const expected = {
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

    const actual = findById('rain', obstacles);
    expect.deepEqual(actual, expected);
});
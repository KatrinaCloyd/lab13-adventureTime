export function getResult(user) {
    if (user.health < 0) {
        return 1;
    } else if (user.health > 40 && user.friends === 3) {
        return 2;
    } else if (user.health > 40 && user.friends < 1) {
        return 4;
    } else if (user.health > 40 && user.friends < 3 && user.friends > 0) {
        return 3;
    } else if (user.health <= 40 && user.health >= 25) {
        return 5;
    } else if (user.health < 25 && user.friends === 3) {
        return 6;
    } else if (user.health < 25 && user.friends < 1) {
        return 7;
    } else return 8;
}
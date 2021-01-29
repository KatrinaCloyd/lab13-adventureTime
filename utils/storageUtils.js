const USER = 'user';

export function setUserStats(userObj) {
    localStorage.setItem(USER, JSON.stringify(userObj));
}

export function getUserStats() {
    let stringyUser = localStorage.getItem(USER);
    let parsedUser = JSON.parse(stringyUser);
    return parsedUser;
}
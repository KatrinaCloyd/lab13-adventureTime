export function findById(obId, obstacles) {
    for (let item of obstacles) {
        if (obId === item.id) {
            return item;
        }
    }
}
function solve(arr, arg) {
    let sort = "";
    arg === "asc" ? sort = (a, b) => a - b : sort = (a, b) => b - a;
    return arr.sort(sort)
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));
// [6, 7, 8, 14, 17]

console.log(solve([14, 7, 17, 6, 8], 'desc'));
// [17, 14, 8, 7, 6]

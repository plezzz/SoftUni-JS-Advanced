function solve(data) {
    let arr = [];
    for (let i = 0; i < 2; i++) {
        arr.push(data.splice(data.indexOf(Math.min(...data)), 1))
    }
    return arr.join(" ")
}

console.log(solve([30, 15, 50, 5]));
// 5 15
console.log(solve([3, 0, 10, 4, 7, 3]));
// 0 3

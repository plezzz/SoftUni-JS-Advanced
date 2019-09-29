function solve(data) {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
        if (i % 2 === 1) {
            arr.push(Number(data[i]) * 2)
        }
    }
    return arr.reverse().join(" ")
}

console.log(solve([10, 15, 20, 25]));
// 50 30
console.log(solve([3, 0, 10, 4, 7, 3]));
// 6 8 0

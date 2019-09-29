function solve(data) {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
        data[i] < 0 ? arr.unshift(data[i]) : arr.push(data[i])
    }
    return arr.join("\n")
}

console.log(solve([7, -2, 8, 9]));
// -2
// 7
// 8
// 9

console.log(solve([3, -2, 0, -1]));
// -1
// -2
// 3
// 0

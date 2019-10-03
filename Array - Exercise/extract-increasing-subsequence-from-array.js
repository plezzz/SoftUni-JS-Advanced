function solve(data) {
    let result = [];
    for (let line of data) {
        if (line >= result[result.length - 1] || result[result.length - 1] === undefined) {
            result.push(line)
        }
    }
    return result.join("\n")
}

//console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
// 1
// 3
// 8
// 10
// 12
// 24

//console.log(solve([1, 2, 3, 4]));
// 1
// 2
// 3
// 4

console.log(solve([20, 3, 2, 15, 6, 1]));
// 20

function solve(data) {
    return Number(data[0]) + Number(data[data.length - 1])
}

console.log(solve(['20', '30', '40']));
// 60
console.log(solve(['5', '10']));
// 15
console.log(solve(['5']));
// 10

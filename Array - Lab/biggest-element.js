function solve(data) {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
        arr.push(Math.max(...data[i]))
    }
    return Math.max(...arr)
}


console.log(solve([[20, 50, 10],
    [8, 33, 145]]
));
// 145

console.log(solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
));
// 33

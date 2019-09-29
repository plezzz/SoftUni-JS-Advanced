function solve(data) {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
        if (i % 2 === 0) {
            arr.push(data[i]);
        }
    }
    return arr.join(" ")
}

console.log(solve(['20', '30', '40']));
// 20 40

console.log(solve(['5', '10']));
// 5

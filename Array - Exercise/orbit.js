function solve(data) {
    let rows = data[0];
    let cols = data[1];
    let starRow = data[2];
    let starCol = data[3];

    let matrix = [];
    for(let i=0; i<rows; i++) {
        matrix.push([]);
    }

    for(let row = 0; row< rows; row++) {
        for(let col=0; col<cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1;
        }
    }

    return matrix.map(row => row.join(" ")).join("\n")
}

console.log(solve([4, 4, 0, 0]));
// 1 2 3 4
// 2 2 3 4
// 3 3 3 4
// 4 4 4 4

console.log(solve([5, 5, 2, 2]));
// 3 3 3 3 3
// 3 2 2 2 3
// 3 2 1 2 3
// 3 2 2 2 3
// 3 3 3 3 3

console.log(solve([3, 3, 2, 2]));
// 3 3 3
// 3 2 2
// 3 2 1

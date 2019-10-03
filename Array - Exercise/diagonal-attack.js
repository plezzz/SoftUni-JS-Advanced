function solve(data) {
    let matrix = data.map(row => row.split(" ").map(Number));
    let main = 0, secondary = 0;

    for(let row=0; row<matrix.length; row++) {
        main += matrix[row][row];
        secondary += matrix[row][matrix[row].length - row - 1];
    }

    if(main === secondary) {
        for(let row = 0; row<matrix.length; row++) {
            for(let col = 0; col<matrix.length; col++) {
                if(row === col || row+col+1 === matrix.length){
                    continue;
                }
                matrix[row][col] = main;
            }
        }
    }

    return matrix.map(row => row.join(" ")).join("\n")
}


console.log(solve(['5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1']));
// 5 15 15 15 1
// 15 4 15 2 15
// 15 15 3 15 15
// 15 4 15 2 15
// 5 15 15 15 1

console.log(solve(['1 1 1', '1 1 1', '1 1 0']));
// 1 1 1
// 1 1 1
// 1 1 0

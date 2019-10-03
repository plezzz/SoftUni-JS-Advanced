function solve(x,y) {
    let rows = x;
    let cols = y;
    let matrix = [];

    for(let i=0; i<rows; i++) {
        matrix.push([]);
    }

    let startRow = 0, startCol = 0, endRow = rows - 1, endCol = cols - 1;
    let number = 1;

    while(startRow<=endRow || startCol<=endCol) {
        for(let i = startCol; i<=endCol; i++) {
            matrix[startRow][i] = number++;

        }

        for(let i = startRow + 1; i<=endRow; i++) {
            matrix[i][endCol] = number++;
        }

        for(let i = endCol - 1; i>=startCol; i--) {
            matrix[endRow][i] = number++;
        }

        for(let i =endRow - 1; i>startRow; i--) {
            matrix[i][startCol] = number++;
        }


        startRow++;
        startCol++;
        endRow--;
        endCol--;
    }

    return matrix.map(row => row.join(" ")).join("\n")
}


console.log(solve(5, 5));
// 1 2 3 4 5
// 16 17 18 19 6
// 15 24 25 20 7
// 14 23 22 21 8
// 13 12 11 10 9

console.log(solve(3, 3));
// 1 2 3
// 8 9 4
// 7 6 5

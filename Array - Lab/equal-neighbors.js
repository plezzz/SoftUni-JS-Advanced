function solve(data) {
    let count = 0;

    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            let rightNeighbor = data[i][j + 1];
            if (rightNeighbor !== undefined && rightNeighbor === data[i][j]) {
                count++;
            }
            if (i > 0) {
                let upNeighbor = data[i - 1][j];
                if (upNeighbor !== undefined && upNeighbor === data[i][j]) {
                    count++;
                }
            }
        }
    }

    return count;
}

console.log(solve([['2', '3', '4', '7', '0'],
                         ['4', '0', '5', '3', '4'],
                         ['2', '3', '5', '4', '2'],
                         ['9', '8', '7', '5', '4']]
));
// 1

console.log(solve([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
));
// 2

console.log(solve([[2, 2, 5, 7, 4],
                         [4, 0, 5, 3, 4],
                         [2, 5, 5, 4, 2]]));
//5

function solve(input) {
    let dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ]
    let player = 'X';
    let isGameEnded = false;
    for (const move of input) {
        let [x, y] = move.split(' ').map(Number);

        if (dashboard[x][y] !== false) {
            console.log(`This place is already taken. Please choose another!`);
        } else {
            dashboard[x][y] = player;
            player == 'X' ? player = 'O' : player = 'X';
        }
        let match = winner(dashboard)[0];
        if (match) {
            console.log(`Player ${match[0]} wins!`);
            break;
        }
        isGameEnded = !dashboard.reduce((a,b) => [...a, ...b],[]).includes(false);
        if(isGameEnded) {
            console.log(`The game ended! Nobody wins :(`);
            break;
        }
    }

    function winner(dashboard) {
        let arrOfMatches = dashboard.reduce((acc, row, i, arr) => {
            acc[0] += row[i];
            acc[1] += row[arr.length - 1 - i];
            acc[2] += row[0];
            acc[3] += row[1];
            acc[4] += row[2];
            return acc;
        }, ['', '', '', '', '']);
        arrOfMatches.push(dashboard[0].join(''), dashboard[1].join(''), dashboard[2].join(''));
        return arrOfMatches.filter((a) => a[0] == a[1] && a[0] == a[2]);
    }

    return dashboard.map(x => x.join('\t')).join("\n")
}


console.log(solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]));
// Player O wins!
// O	X	X
// X	O	X
// O	false	O

console.log(solve(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]));
// This place is already taken. Please choose another!
// Player X wins!
// X	X	X
// false	O	O
// false	false	false

console.log(solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]));
// The game ended! Nobody wins :(
// O	X	X
// X	X	O
// O	O	X

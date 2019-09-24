function solve(array) {
    let digit = array.shift();

    let operations = {
        chop: (num) => {
            return num / 2
        },
        dice: (num) => {
            return Math.sqrt(num)
        },
        spice: (num) => {
            return num + 1
        },
        bake: (num) => {
            return num * 3
        },
        fillet: (num) => {
            return num - (num * 0.2)
        }
    };

    for (let i = 0; i < 5; ++i) {
        let result = operations[array[i]](digit);
        digit = result;
        console.log(result)
    }
}

let test1 = ['32', 'chop', 'chop', 'chop', 'chop', 'chop'];
let test2 = ['9', 'dice', 'spice', 'chop', 'bake', 'fillet'];

solve(test1);
// 16
// 8
// 4
// 2
// 1
solve(test2);
// 3
// 4
// 2
// 6
// 4.8

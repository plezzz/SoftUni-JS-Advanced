function solve(data) {
    let result = true;
    let dataTwo = transpose(data);
    let sumD = sum(data[0]);

    for (let row = 0; row < data.length - 1; row++) {
        let sumOne = sum(data[row + 1]);
        let sumTwo = sum(dataTwo[row]);
        let sumThree = sum(dataTwo[row + 1]);
        if (sumD !== sumOne || sumD !== sumTwo || sumD !== sumThree) {
            result = false
        }
    }

    function transpose(a) {
        return Object.keys(a[0]).map(function (c) {
            return a.map(function (r) {
                return r[c];
            });
        });
    }

    function sum(arr) {
        return arr.reduce((a, b) => a + b, 0);
    }

    return result;
}

console.log(solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
));
// true

console.log(solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
));
// false

console.log(solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
));
// true

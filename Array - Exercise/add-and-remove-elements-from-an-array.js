function solve(array) {
    let increase = 1;
    let result = [];

    for (let line of array) {
        line === "add" ? result.push(increase) : result.pop();
        increase++
    }

    return result.length >0 ? result.join("\n") : "Empty"
}


console.log(solve(['add',
    'add',
    'add',
    'add']
));

// 1
// 2
// 3
// 4

console.log(solve(['add',
    'add',
    'remove',
    'add',
    'add']
));
// 1
// 4
// 5

console.log(solve(['remove',
    'remove',
    'remove']
));
// Empty

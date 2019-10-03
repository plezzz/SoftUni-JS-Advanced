function solve(data) {
    let rotation = data.pop();
    rotation %= data.length;
    for (let i = 0; i < rotation; i++) {
        data.unshift(data.pop())
    }
    return data.join(" ")
}

console.log(solve(['1',
    '2',
    '3',
    '4',
    '2']
));
// 3 4 1 2

console.log(solve(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']
));
// Orange Coconut Apple Banana

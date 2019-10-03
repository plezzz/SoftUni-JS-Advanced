function solve(data) {
    let counter = Number(data.pop());
    let result =[];
    for (let i = 0; i < data.length; i+=counter) {
        result.push(data[i])
    }
   return  result.join("\n")
}

console.log(solve(['5',
    '20',
    '31',
    '4',
    '20',
    '2']
));
// 5
// 31
// 20
console.log(solve(['dsa',
    'asd',
    'test',
    'tset',
    '2']
));
// dsa
// test

console.log(solve(['1',
    '2',
    '3',
    '4',
    '5',
    '6']
));
// 1

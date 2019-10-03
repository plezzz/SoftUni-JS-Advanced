function solve(data) {
    let delimiter = data.pop();
return data.join(delimiter)
}

console.log(solve(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-']
));
// One-Two-Three-Four-Five

console.log(solve(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!',
    '_']
));
// How about no?_I_will_not_do_it!

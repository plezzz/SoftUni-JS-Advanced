function solve(data) {
    return data
        .sort((a, b) =>
            a.length-b.length ||
            a.toLowerCase().localeCompare(b.toLowerCase()))
        .join("\n")
}

console.log(solve(['alpha', 'beta', 'gamma']));
// beta
// alpha
// gamma

console.log(solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']
));
// Jack
// Isacc
// George
// Theodor
// Harrison

console.log(solve(['test', 'Deny', 'omen', 'Default']));
// Deny
// omen
// test
// Default

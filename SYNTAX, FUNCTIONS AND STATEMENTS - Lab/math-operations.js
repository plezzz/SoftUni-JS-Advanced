function solve(x,y,operator) {
    let math = {
        '+': function (x, y) { return x + y },
        '-': function (x, y) { return x - y },
        '*': function (x, y) { return x * y },
        '/': function (x, y) { return x / y },
        '%': function (x, y) { return x % y },
        '**': function (x, y) { return x ** y }
    };

    console.log(math[operator](x,y))
}


solve(5, 6, '+');
// 11
solve(3, 5.5, '*');
// 16.5

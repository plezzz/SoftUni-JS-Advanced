function solve(x) {
    let type = typeof x;
    let result = type === "number" ? area(x) : `We can not calculate the circle area, because we receive a ${type}.`;

    function area(x) {
        return (Math.pow(x, 2) * Math.PI).toFixed(2)
    }

    console.log(result)
}

solve(5);
// 78.54
solve('name');
// We can not calculate the circle area, because we receive a string.
solve(true);
// We can not calculate the circle area, because we receive a boolean.

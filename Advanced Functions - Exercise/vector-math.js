(() => {
    let add = (x, y) => [x[0]+y[0], x[1]+y[1]];
    let multiply = (x, scalar) => [x[0] * scalar, x[1] * scalar];
    let length = (x) => Math.sqrt(Math.pow(x[0], 2) + Math.pow(x[1], 2));
    let dot = (x, y) => x[0] * y[0] + x[1] * y[1];
    let cross = (x, y) => x[0] * y[1] - x[1] * y[0];

    return {add, multiply, length, dot, cross};
})();

console.log(solution.add([1, 1], [1, 0]));
// [2, 1]
// Explanation [1 + 1, 1 + 0] = [2, 1]

console.log(solution.multiply([3.5, -2], 2));
//[7, -4]
// Explanation [3.5 * 2, (-2) * 2] = [7, -4]

console.log(solution.length([3, -4]));
//5
// Explanation sqrt(3 * 3 + (-4) * (-4)) = 5

console.log(solution.dot([1, 0], [0, -1]));
//0
// Explanation 1 * 0 + 0 * (-1) = 0

console.log(solution.cross([3, 7], [1, 0]));
//-7
// Explanation 3 * 0 – 7 * 1 = -7

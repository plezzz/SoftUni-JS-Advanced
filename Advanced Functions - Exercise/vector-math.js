(() => {
    let add = (vec1, vec2) => [vec1[0]+vec2[0], vec1[1]+vec2[1]];
    let multiply = (vec1, scalar) => [vec1[0] * scalar, vec1[1] * scalar];
    let length = (vec1) => Math.sqrt(Math.pow(vec1[0], 2) + Math.pow(vec1[1], 2));
    let dot = (vec1, vec2) => vec1[0] * vec2[0] + vec1[1] * vec2[1];
    let cross = (vec1, vec2) => vec1[0] * vec2[1] - vec1[1] * vec2[0];

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

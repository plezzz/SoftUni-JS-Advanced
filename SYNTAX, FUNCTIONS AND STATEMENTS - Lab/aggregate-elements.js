function solve(a) {
let sum = a.reduce((a, b) => a + b, 0);
let sumInverse = a.reduce((a, b) => a + 1/b, 0);
let join = a.join("");


    console.log(sum);
    console.log(sumInverse);
    console.log(join);
}

let test1=[1, 2, 3];
let test2=[2, 4, 8, 16];

solve(test1);
// 6
// 1.8333
// 123
solve(test2);
// 30
// 0.9375
// 24816

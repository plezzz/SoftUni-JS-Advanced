function solve(array) {
    let object = {};
    for (let i = 0; i < array.length - 1; i += 2) {
        object[array[i]] = Number(array[i + 1]);
    }
    console.log(object)
}

let test1 = ['Yoghurt', 48, 'Rise', 138, 'Apple', 52];
let test2 = ['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42];

solve(test1);
// { Yoghurt: 48, Rise: 138, Apple: 52 }
solve(test2);
// { Potato: 93, Skyr: 63, Cucumber: 18, Milk: 42 }

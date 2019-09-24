function solve(x) {
console.log(x.toUpperCase().match(/\b(\w+)\b/g).join(", "))
}

solve('Hi, how are you?');
// HI, HOW, ARE, YOU
solve('hello')
// HELLO

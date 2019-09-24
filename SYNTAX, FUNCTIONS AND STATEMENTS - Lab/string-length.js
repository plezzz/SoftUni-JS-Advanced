function solve(x, y, z) {
    let sumLength = x.length + y.length + z.length;
    let avrgLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(avrgLength);
}

solve('chocolate', 'ice cream', 'cake')
//22
//7
solve('pasta', '5', '22.3')
//10
// 3

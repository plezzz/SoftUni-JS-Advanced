/*function solve(x, y, z) {
    let sumLenght = x.lenght + y.lenght + z.lenght;
    let avrgLenght = Math.floor(sumLenght / 3);

    console.log(sumLenght);
    console.log(avrgLenght);

}

console.log(
    solve('chocolate', 'ice cream', 'cake')
)*/

function solve2(x) {
    x=String(x);
    if (x) {
        console.log(`${x} => true`)
    } else {
        console.log(`${x} => false`)
    }
}

solve2(0);
solve2(1);
solve2(2);
solve2(3);
solve2(4);
solve2(5);

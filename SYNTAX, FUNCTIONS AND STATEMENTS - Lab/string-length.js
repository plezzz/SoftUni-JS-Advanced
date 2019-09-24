function solve(x, y, z) {
    let sumLenght = x.lenght + y.lenght + z.lenght;
    let avrgLenght = Math.floor(sumLenght / 3);

    console.log(sumLenght);
    console.log(avrgLenght);

}

console.log(
    solve('chocolate', 'ice cream', 'cake')
)

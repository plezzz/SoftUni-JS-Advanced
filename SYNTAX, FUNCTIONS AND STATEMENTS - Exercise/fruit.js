function solve(x, y, z) {
    let weight = y / 1000;
    let price = weight * z;

    console.log(`I need $${price.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${x}.`)
}

solve('orange', 2500, 1.80);
// I need $4.50 to buy 2.50 kilograms orange.
solve('apple', 1563, 2.35);
// I need $3.67 to buy 1.56 kilograms apple.


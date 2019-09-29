function solve(input) {
    let quantities = {};
    let bottles = {};

    for (let line of input) {
        let [fruit, quantity] = line.split(" => ");

        if (!quantities.hasOwnProperty(fruit)) {
            quantities[fruit] = 0;
        }

        quantities[fruit] += Number(quantity);
        if (quantities[fruit] >= 1000) {
            bottles[fruit] = parseInt(quantities[fruit] / 1000);
        }
    }

    for (let key of Object.keys(bottles)) {
        console.log(`${key} => ${bottles[key]}`);
    }
}

solve(
    ['Orange => 2000',
        'Peach => 1432',
        'Banana => 450',
        'Peach => 600',
        'Strawberry => 549']
);
// Orange => 2
// Peach => 2

solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
);
// Pear => 8
// Watermelon => 10
// Kiwi => 4

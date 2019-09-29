function solve(data) {
    let cars = {};
    for (let i = 0; i < data.length; i++) {
        let [brand, model, producedCars] = data[i].split(" | ");
        if (!cars.hasOwnProperty(brand)) {
            Object.assign(cars, {[brand]: {[model]: producedCars}});
        } else {
            if (!cars[brand].hasOwnProperty(model)) {
                Object.assign(cars[brand], {[model]: producedCars});
            } else {
              cars[brand][model] = Number(cars[brand][model]) + Number(producedCars);
            }
        }
    }

    let str = "";
    let toStr = Object.keys(cars).map(function (brand) {
        str += `${brand}\n`;
        let getProduct = Object.keys(cars[brand]).map(function (model) {
            str += `###${model} -> ${cars[brand][model]}\n`
        });
    });
    return str
}


console.log(solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
));
// Audi
// ###Q7 -> 1000
// ###Q6 -> 100
// BMW
// ###X5 -> 1000
// ###X6 -> 100
// Citroen
// ###C4 -> 145
// ###C5 -> 10
// Volga
// ###GAZ-24 -> 1000000
// Lada
// ###Niva -> 1000000
// ###Jigula -> 1000000

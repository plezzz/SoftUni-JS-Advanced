function solve(data) {
    let arr = new Map();

    for (let line of data) {
        let [product, price] = line.split(" : ");
        arr.set(product, price);
    }

    let map = new Map([...arr].sort((a, b) => a[0] > b[0] ? 1 : -1));
    let charStart = "";
    for(let line of map){
        let char = line[0][0];
        if (char !==charStart){
            console.log(char);
            charStart=char;
        }
        console.log(`   ${line[0]}: ${line[1]}`)
    }
}

console.log(solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
));
// A
//   Anti-Bug Spray: 15
//   Apple: 1.25
//   Appricot: 20.4
// B
//   Boiler: 300
// D
//   Deodorant: 10
// F
//   Fridge: 1500
// T
//   T-Shirt: 10
//   TV: 1499

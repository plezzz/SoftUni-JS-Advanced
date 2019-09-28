function solve(data) {
    let towns = {};
    for (let i = 0; i < data.length; i++) {
        let [town, population] = data[i].split(" <-> ");
        if (!towns.hasOwnProperty(town)) {
            Object.assign(towns, {[town]: Number(population)})
        } else {
            let newPop = Number(towns[town] + Number(population));
            Object.assign(towns, {[town]: Number(newPop)})
        }
    }
    let str ="";
    let toStr = Object.keys(towns).map(function(key) {
        return str += key + " : " + towns[key]+"\n";
    });

   return str
}

console.log(solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
));
// Sofia : 1200000
// Montana : 20000
// New York : 10000000
// Washington : 2345000
// Las Vegas : 1000000

console.log(solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
));
// Istanbul : 101000
// Honk Kong : 2100004
// Jerusalem : 2352344
// Mexico City : 23401925

function solve(array) {
    let keys = array.shift();
    keys = getArray(keys);

    let towns = [];
    for (let i = 0; i < array.length; i++) {
        let info = getArray(array[i]);
        info = info.map((el) => {
            if (!isNaN(el)) {
                return Number(parseFloat(el).toFixed(2));
            }
            return el
        });
        let townInfo = {};
        for (let j = 0; j < keys.length; j++) {
            let town = {[keys[j]]: info[j]};
            Object.assign(townInfo, town);
        }
        towns.push(townInfo);
    }

    function getArray(s) {
        return s.split("|")
            .filter((el) => {
                return el;
            })
            .map((el) => {
                return el.trim()
            });
    }

    console.log(JSON.stringify(towns))
}

let test1 = ['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'];

let test2 = ['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'];

solve(test1);
// [{"Town":"Sofia",
//   "Latitude":42.69,
//   "Longitude":23.32
// },
// {"Town":"Beijing",
//  "Latitude":39.91,
//  "Longitude":116.36
// }]

solve(test2);
// [{"Town":"Veliko Turnovo",
//   "Latitude":43.08,
//   "Longitude":25.62
// },
// {"Town":"Monatevideo",
//  "Latitude":34.50,
//  "Longitude":56.11
// }]

// Attention: Judge return 80/100 point because function Number return 3.5 instant 3.50

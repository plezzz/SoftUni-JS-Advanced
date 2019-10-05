() => {
    let ingredients = {
        'protein': 0,
        'carbohydrate': 0,
        'fat': 0,
        'flavour': 0,
    };

    return function (string) {
        let prepOutput;

        function errorPrint(str) {
            prepOutput = `Error: not enough ${str} in stock`
        }

        function prepare(q, protein, carb, fat, flavour) {
            let [pr, c, ft, fl] = [0, 0, 0, 0];
            if (protein > 0) {
                if (protein * q > ingredients.protein) return errorPrint('protein');
                pr = q * protein
            }
            if (carb > 0) {
                if (carb * q > ingredients.carbohydrate) return errorPrint('carbohydrate');
                c = q * carb
            }
            if (fat > 0) {
                if (fat * q > ingredients.fat) return errorPrint('fat');
                ft = q * fat
            }
            if (flavour > 0) {
                if (flavour * q > ingredients.flavour) return errorPrint('flavour');
                fl = q * flavour
            }
            ingredients.protein -= pr;
            ingredients.carbohydrate -= c;
            ingredients.fat -= ft;
            ingredients.flavour -= fl;
            prepOutput = 'Success'
        }

        let recipes = {
            apple: (q) => prepare(q, 0, 1, 0, 2),
            lemonade: (q) => prepare(q, 0, 10, 0, 20),
            burger: (q) => prepare(q, 0, 5, 7, 3),
            eggs: (q) => prepare(q, 5, 0, 1, 1),
            turkey: (q) => prepare(q, 10, 10, 10, 10)
        };
        let cmdArr = string.split(' ');
        if (cmdArr.length === 1) {
            return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} ` +
                `fat=${ingredients.fat} flavour=${ingredients.flavour}`
        } else {
            let cmd = cmdArr[0];
            let quantity = cmdArr[2];
            switch (cmd) {
                case 'restock':
                    let element = cmdArr[1];
                    ingredients[element] += +quantity;
                    return 'Success';
                case 'prepare':
                    let recipe = cmdArr[1];
                    recipes[recipe](quantity);
                    return prepOutput
            }
        }
    }
};

let manager = solution();
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));


// function solution(array) {
//     let ingredients = {
//         'protein': 0,
//         'carbohydrate': 0,
//         'fat': 0,
//         'flavour': 0,
//     };
//
//     let recipes = {
//         'apple': {
//             'carbohydrate': 1,
//             'flavour': 2
//         },
//         'lemonade': {
//             'carbohydrate': 10,
//             'flavour': 20
//         },
//         'burger': {
//             'carbohydrate': 5,
//             'fat': 7,
//             'flavour': 3
//         },
//         'eggs': {
//             'protein': 5,
//             'fat': 1,
//             'flavour': 1
//         },
//         'turkey': {
//             'protein': 10,
//             'carbohydrate': 10,
//             'fat': 10,
//             'flavour': 10
//         }
//     };
//
//     for (let data of array) {
//         let [command, arg, quantity] = data.split(" ");
//
//         let commands = {
//             restock: (arg, quantity) => {
//                 ingredients[arg] += Number(quantity);
//                 return "Success"
//             },
//             prepare: (arg, quantity) => {
//                 let check = true;
//                 let ings = Object.keys(recipes[arg]);
//                 let error = "";
//                 for (let ing of ings) {
//                     let neededIng = recipes[arg][ing] * Number(quantity);
//                     if (ingredients[ing] >= neededIng) {
//                         check = true
//                     } else {
//                         error = ing;
//                         check = false;
//                         break
//                     }
//                 }
//                 if (check) {
//                     for (let ing of ings) {
//                         let neededIng = recipes[arg][ing] * Number(quantity);
//                         ingredients[ing] -= neededIng
//                     }
//                     return "Success"
//                 }
//                 return `Error: not enough ${error} in stock`
//             },
//             report: () => {
//                 return `protein=${ingredients['protein']}  carbohydrate=${ingredients['carbohydrate']} fat=${ingredients['fat']}  flavour=${ingredients['flavour']}`
//             }
//         };
//         console.log(commands[command](arg, quantity))
//     }
// } ссс
//
// solution(["restock carbohydrate 10", "restock flavour 10", "prepare apple 1", "restock fat 10", "prepare burger 1", "report"]);
// // Success
// // Success
// // Success
// // Success
// // Success
// // protein=0 carbohydrate=4 fat=3 flavour=5
//
// solution(["prepare turkey 1", "restock protein 10", "prepare turkey 1", "restock carbohydrate 10", "prepare turkey 1", "restock fat 10", "prepare turkey 1", "restock flavour 10", "prepare turkey 1", "report"]);
//
// // Error: not enough protein in stock
// // Success
// // Error: not enough carbohydrate in stock
// // Success
// // Error: not enough fat in stock
// // Success
// // Error: not enough flavour in stock
// // Success
// // Success
// // protein=0 carbohydrate=0 fat=0 flavour=0

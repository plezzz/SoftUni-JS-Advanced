function solve(arr) {
    let towns = {};
    for (let i = 0; i < arr.length; i += 2) {
        if (!towns.hasOwnProperty(arr[i])) {
            Object.assign(towns, {[arr[i]]: Number(arr[i + 1])});
        } else {
            let count = Number(towns[arr[i]]) + Number(arr[i + 1]);
            Object.assign(towns, {[arr[i]]: count});
        }
    }
    return JSON.stringify(towns);
}

console.log(solve(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']));
// {"Sofia":25,"Varna":7}

console.log(solve(['Sofia', '20', 'Varna', '3', 'sofia', '5', 'varna', '4']));
// {"Sofia":20,"Varna":3,"sofia":5,"varna":4}

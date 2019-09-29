function solve(array) {
    const increase = 1;

    let arr = [];
    let lastElement = 1;
    let operations = {
        add: () => {
            lastElement = arr.length - 1;
            return arr.push( arr[lastElement] + increase)
        },
        remove: () => {
            return
        }
    };

    let result = array.map((x) =>{
        operations[x]()
    });
   // arr.shift();
    return arr

}


console.log(solve(['add',
    'add',
    'add',
    'add']
));

// 1
// 2
// 3
// 4

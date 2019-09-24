function solve(array) {
    let speed = array[0];
    let area = array[1];

    let areas = {
        motorway: () => {
            return 130
        },
        interstate: () => {
            return 90
        },
        city: () => {
            return 50
        },
        residential: () => {
            return 20
        }
    };

    let overLimit = speed - areas[area]();

    if (overLimit > 0 && overLimit <= 20) {
        console.log('speeding')
    } else if (overLimit > 20 && overLimit <= 40) {
        console.log('excessive speeding')
    } else if (overLimit > 40) {
        console.log('reckless driving')
    }
}

let test1 = [40, 'city'];
let test2 = [21, 'residential'];
let test3 = [120, 'interstate'];
let test4 = [200, 'motorway'];

solve(test1);
solve(test2);
// speeding
solve(test3);
// excessive speeding
solve(test4);
// reckless driving

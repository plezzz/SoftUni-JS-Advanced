function solve(array) {
    let juices = array
        .reduce((juices, currentJuice) => {
            let [juice, quantity] = currentJuice.split(" => ");
            juices[juice] ? juices[juice] += Number(quantity) : juices[juice] = Number(quantity);
            return juices;
        }, []);

    let result = Object.entries(juices).reduce((juices, currentJuice) => {
        let value = Math.trunc(currentJuice[1] / 1000);
        value ? juices[currentJuice[0]] = value : null;
        return juices;
    }, []);


    console.log(result);
}

//var obj = {id: 1, name: "Test object"}
solve(
    ['Orange => 2000',
        'Peach => 1432',
        'Banana => 450',
        'Peach => 600',
        'Strawberry => 549']
);

solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
)

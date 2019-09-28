function solve(data) {
    let sales = {};
    for (let i = 0; i < data.length; i++) {
        let [town, product, amount] = data[i].split(" -> ");
        let total = amount.split(" : ").reduce((a, b) => Number(a) * Number(b), 1);
        if (!sales.hasOwnProperty(town)) {
            Object.assign(sales, {[town]: {[product]: total}});
        } else {
            Object.assign(sales[town], {[product]: total});
        }
    }

    let str = "";
    let toStr = Object.keys(sales).map(function (town) {
        str += `Town - ${town}\n`;
        let getProduct = Object.keys(sales[town]).map(function (prod) {
            str += `$$$${prod} : ${sales[town][prod]}\n`
        });
    });
    return str
}


console.log(solve(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3']
));

// Town - Sofia
// $$$Laptops HP : 400000
// $$$Raspberry : 300000000
// $$$Audi Q7 : 20000000
// Town - Montana
// $$$Portokals : 200000
// $$$Qgodas : 4000
// $$$Chereshas : 300

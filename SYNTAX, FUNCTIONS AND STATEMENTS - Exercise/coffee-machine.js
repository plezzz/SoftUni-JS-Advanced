function solve(array) {

    let total = 0;
    for (let i = 0; i < array.length; i++) {
        let order = array[i].split(", ");
        let price = (order[1] === "coffee" ? coffee(order) : tea(order)).toFixed(2);
        let change = (order[0] - price).toFixed(2);
        let moneyNeed = Math.abs(change).toFixed(2);
        let orderDisplay = "";
        if (order[0] >= price) {
            orderDisplay = `You ordered ${order[1]}. Price: $${price} Change: $${change}`;
            total += Number(price);
        } else {
            orderDisplay = `Not enough money for ${order[1]}. Need $${moneyNeed} more.`;
        }
        console.log(orderDisplay)
    }
    console.log("Income Report: $"+total.toFixed(2));

    function coffee(order) {
        let priceCoffee = order[2] === "caffeine" ? 0.80 : 0.90;
        let priceExtras = order[3] === "milk" ? milk(priceCoffee, order[4]) : sugar(order[3]);
        return Number(priceCoffee) + Number(priceExtras);
    }

    function tea(order) {
        let priceTea = 0.80;
        let priceExtras = order[2] === "milk" ? milk(priceTea, order[3]) : sugar(order[2]);
        return Number(priceTea) + Number(priceExtras);
    }

    function sugar(amount) {
        return amount > 0 ? 0.10 : 0;
    }

    function milk(price, sugarAmount) {
        let addSugar = sugar(sugarAmount);
        let milk = (price * 0.1).toFixed(1);
        return Number(addSugar) + Number(milk);
    }
}

let test1 = ['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0'];
let test2 = ['8.00, coffee, decaf, 4', '1.00, tea, 2'];

solve(test1);
// You ordered coffee. Price: $1.00 Change: $0.00
// Not enough money for tea. Need $0.60 more.
// You ordered coffee. Price: $0.90 Change: $0.10
// Income Report: $1.90
solve(test2);
// You ordered coffee. Price: $1.00 Change: $7.00
// You ordered tea. Price: $0.90 Change: $0.10
// Income Report: $1.90

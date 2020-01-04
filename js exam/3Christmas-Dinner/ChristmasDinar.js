class ChristmasDinner {
    constructor(budget) {
        if (budget < 0) {
            throw new Error(`The budget cannot be a negative number`);
        }
        //TODO Try with SET instead IF
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guest = {};
    }

    shopping(product) {
        if (product[1] <= this.budget) {
            this.products.push(product[0]);
            this.budget -= product[1];
            return `You have successfully bought ${product[0]}!`

        } else {
            throw new Error('Not enough money to buy this product')
        }
    }

    recipes(recipe) {
        let cooked = false;
        let recipeName = recipe.recipeName;
        let productsList = recipe.productsList;
        productsList.forEach(el => {
            let index = this.products.indexOf(el);
            if (index !== -1) {
                cooked = true;
            } else {
                cooked = false;
                throw new Error('We do not have this product')
            }
        });

        if (cooked) {
            this.dishes.push({recipeName, productsList});
            return `${recipeName} has been successfully cooked!`
        }
    }

    inviteGuests(name, dish) {
        let check = 0;

        this.dishes.forEach(el => {
            if (el.recipeName === dish) {
                check++
            }
        });

        if (check) {
            if (!this.guest.hasOwnProperty(name)) {
                this.guest[name] = dish;
                return `You have successfully invited ${name}!`
            } else {
                throw new Error('This guest has already been invited')
            }
        } else {
            throw new Error('We do not have this dish')
        }
    }

    showAttendance() {
        let output = [];
        for (let name in this.guest) {
            let dish = this.guest[name];
            let index = 0;
            let products = "";
            this.dishes.forEach(el => {
                if (el.recipeName === dish) {
                    products = el.productsList
                }
            });
            output.push(`${name} will eat ${dish}, which consists of ${products.join(', ')}`)
        }
        return output.join('\n')
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);


//console.log(dinner.products);
dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey',]
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');
console.log(dinner.showAttendance());

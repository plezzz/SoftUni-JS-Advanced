class Library {
    constructor(libraryName) {
        this.libraryName = libraryName;
        this.subscribers = [];
        this.subscriptionTypes = {
            normal: this.libraryName.length,
            special: this.libraryName.length * 2,
            vip: Number.MAX_SAFE_INTEGER
        };
    }

    subscribe(name, type) {
        if (!this.subscriptionTypes[type]) {
            throw Error(`The type ${type} is invalid`);
        }
        const foundSubscriber = this.subscribers.find(s => s.name === name);
        if (!foundSubscriber) {
            this.subscribers.push({name, type, books: []});
            return this.subscribers[this.subscribers.length - 1]
        }
        foundSubscriber.type = type;
        return foundSubscriber
    }

    unsubscribe(name){
        const foundSubscriber = this.subscribers.find(s => s.name === name);
        if (!foundSubscriber) {
            throw new Error(`There is no such subscriber as ${name}`)
        }
        this.subscribers.splice(this.subscribers.indexOf(foundSubscriber),1);
        return this.subscribers
    }
}

let lib = new Library('Lib');
lib.subscribe('Peter', 'normal');
lib.subscribe('John', 'special');
lib.unsubscribe('John');
lib.subscribe('John', 'normal');

//lib.receiveBook('John', 'A Song of Ice and Fire', 'George R. R. Martin');
//lib.receiveBook('Peter', 'Lord of the rings', 'J. R. R. Tolkien');
//lib.receiveBook('John', 'Harry Potter', 'J. K. Rowling');

//console.log(lib.showInfo());



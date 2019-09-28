function solve(data) {
    let str = data[0];
    let arr = str.match(/\w+/gmi);

    let counter = {};
    for (let i = 0; i < arr.length; i++) {
        if (!counter.hasOwnProperty(arr[i])) {
            Object.assign(counter, {[arr[i]]: 0})
        }
        counter[arr[i]]++;
    }
    return JSON.stringify(counter)
}


console.log(solve(["Far too slow, you're far too slow."]));
// {"Far":1,
//  "too":2,
//  "slow":2,
//  "you":1,
//  "re":1,
//  "far":1}

console.log(solve(['JS devs use Node.js for server-side JS.-- JS for devs']));
// {"JS":3,
//  "devs":2,
//  "use":1,
//  "Node":1,
//  "js":1,
//  "for":2,
//  "server":1,
//  "side":1}

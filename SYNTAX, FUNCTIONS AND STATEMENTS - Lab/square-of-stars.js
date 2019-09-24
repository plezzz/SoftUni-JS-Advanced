function solve(x = 5) {
    for (let i = 0; i < x; i++) {
        let result = "";
        for (let j = 0; j < x; j++) {
            result += "* ";
        }
        console.log(result)
    }
}

solve(1);
// *
solve(2);
// * *
// * *
solve(5);
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *
solve();
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *


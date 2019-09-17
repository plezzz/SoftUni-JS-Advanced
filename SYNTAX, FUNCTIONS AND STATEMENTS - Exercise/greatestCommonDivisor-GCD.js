function solve(x, y) {

    while (y != 0)
    {
        let old = y;
        y = x % y;
        x = old;
    }
    console.log(Math.max(x,y));
}

solve(15, 5);
// 5
solve(2154, 458);
// 2

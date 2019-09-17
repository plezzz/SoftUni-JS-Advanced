function solve(x, y) {
    var gcd = function (a, b) {
        if (!b) {
            return a;
        }
        return gcd(b, a % b);
    }
    console.log(gcd(x, y))
}

solve(15, 5);//5
solve(2154, 458);//2

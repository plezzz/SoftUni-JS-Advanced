function solve(num) {
    let digits = num.toString().split('');
    let realDigits = digits.map(Number);
    let isSame = true;

    for (let i = 0; i < realDigits.length - 1; i++) {
        if (realDigits[i] != realDigits[i + 1]) {
            isSame = false;
        }
    }

    let arrSum = realDigits.reduce((a, b) => a + b);
    console.log(isSame);
    console.log(arrSum);
}

solve(2222222);
// true
// 14
solve(1234);
// false
// 10

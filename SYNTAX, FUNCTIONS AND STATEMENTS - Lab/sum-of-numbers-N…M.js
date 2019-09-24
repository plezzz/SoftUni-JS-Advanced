function solve(n,m) {

    let numN = Number(n);
    let numM = Number(m);

    let result =0;
    for (let i = numN; i <= numM; i++) {
        result +=Number(i);
    }
    console.log(result)
}

solve('1', '5' );
// 15
solve('-8', '20');
// 174

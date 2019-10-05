(function functionalSum() {
    let sum = 0;

    function add(num) {
        sum += num;
        return add;
    }

    add.toString = () => sum;
    return add;
}());

add(1);
// 1

add(1)(6)(-3);
// 4

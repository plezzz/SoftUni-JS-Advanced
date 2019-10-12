function solve() {
    const selectMenuTo = document.getElementById('selectMenuTo');
    createSelectMenuOptions();
    const convertBtn = document.querySelector("#container > button");
    convertBtn.addEventListener('click', convert);

    function convert() {
        let num = Number(document.getElementById('input').value);
        let result;
        if (selectMenuTo.value === 'binary') {
            result = binary(num);
        } else if (selectMenuTo.value === 'hexadecimal') {
            result = hexadecimal(num);
        }
        document.getElementById('result').value = result;
    }

    function createSelectMenuOptions() {
        addOption("Binary");
        addOption("Hexadecimal");
    }

    function addOption(el) {
        let a = document.createElement('option');
        a.textContent = el;
        a.value = el.toLowerCase();
        selectMenuTo.appendChild(a);
    }

    function binary(num) {
        return (num >>> 0).toString(2);
    }

    function hexadecimal(num) {
        return num.toString(16).toUpperCase();
    }
}

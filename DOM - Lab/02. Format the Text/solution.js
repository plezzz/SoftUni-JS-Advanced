function solve() {
    let input = document.getElementById('input');
    let output = document.getElementById('output');
    if (input === null) {
        return;
    }
    let sen = input.innerHTML
        .split(".")
        .filter(x => x !== "");

    for (let i = 0; i < sen.length; i += 3) {
        let p = document.createElement("p");
        let str = "";
        for (let j = 0; j < 3; j++) {
            if (i + j < sen.length) {
                str += sen[i + j] + "."
            }
        }
        p.innerHTML = `${sen[i]}. ${sen[i + 1]}. ${sen[i + 2]}.`;
        output.appendChild(p);
    }
}

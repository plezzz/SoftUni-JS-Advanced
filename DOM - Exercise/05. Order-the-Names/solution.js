function solve() {
    let btn = document.querySelector("#exercise > article > button").addEventListener('click', addName);

    function addName() {
        let input = document.querySelector("#exercise > article > input[type=text]");
        let name = input.value[0].toUpperCase() + input.value.substring(1).toLowerCase();
        let index = name[0].charCodeAt() - 65;
        let liItems = Array.from(document.querySelectorAll('ol li'));
        ((liItems[index]).textContent) ?
            (liItems[index]).textContent += ', ' + name :
            (liItems[index]).textContent = name;
    }
}

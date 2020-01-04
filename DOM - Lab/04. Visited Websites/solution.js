function solve() {
    const template = x => `visited ${x} times`;

    let soft = document.querySelector("#page1 > div > div:nth-child(1) > a");
    let google = document.querySelector("#page1 > div > div:nth-child(2) > a");
    let youtube = document.querySelector("#page1 > div > div:nth-child(3) > a");
    let wiki = document.querySelector("#page1 > div > div:nth-child(4) > a");
    let gmail = document.querySelector("#page1 > div > div:nth-child(5) > a");
    let stack = document.querySelector("#page1 > div > div:nth-child(6) > a");

    soft.addEventListener('click', e => {
        increaseCount(1)
    });
    google.addEventListener('click', e => {
        increaseCount(2)
    });
    youtube.addEventListener('click', e => {
        increaseCount(3)
    });
    wiki.addEventListener('click', e => {
        increaseCount(4)
    });
    gmail.addEventListener('click', e => {
        increaseCount(5)
    });
    stack.addEventListener('click', e => {
        increaseCount(6)
    });

    function increaseCount(c) {
        let visited = document.querySelector(`#page1 > div > div:nth-child(${c}) > p`);
        let num = visited.textContent.replace(/[^0-9]/g, '');
        visited.textContent = template(Number(num) + 1)
    }
}

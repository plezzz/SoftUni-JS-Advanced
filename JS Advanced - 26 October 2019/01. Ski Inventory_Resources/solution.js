function solve() {
    const addBtn = document.querySelector("#add-new > button");
    const input = document.querySelectorAll("input");
    let [filterName, name, quantity, price] = Array.from(input);
    const ul = document.querySelector("#products > ul");
    const moveBtn = document.getElementsByClassName('move');
    const filterBtn = document.querySelector("#products > div > button");

    addBtn.addEventListener("click", function (e) {
        e.preventDefault();
        addProduct();
    });

    function addProduct() {
        let span = document.createElement("span");
        let strong = document.createElement("strong");
        let strongPrice = document.createElement("strong");
        let div = document.createElement("div");
        let btn = document.createElement("button");
        span.textContent = name.value;
        strong.textContent = 'Available: ' + Number(quantity.value);
        strongPrice.textContent = Number(price.value).toFixed(2);
        btn.textContent = `Add to Client's List`;
        div.appendChild(strongPrice);
        div.appendChild(btn);
        let li = document.createElement("li");
        li.appendChild(span);
        li.appendChild(strong);
        li.appendChild(div);
        ul.appendChild(li);
    }

    filterBtn.addEventListener('click', filter);

    function filter() {
        let avP = ul.getElementsByTagName('li');

        for (i = 0; i < avP.length; i++) {
            a = avP[i].getElementsByTagName("span")[0];
            txtValue = a.textContent || a.innerText;
                if (txtValue.toUpperCase().indexOf(filterName.value.toUpperCase()) > -1) {
                avP[i].style.display = "";
            } else {
                avP[i].style.display = "none";
            }
        }
    }
}

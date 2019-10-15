function addItem() {
    let newItemText = document.getElementById("newItemText");
    let newItemValue = document.getElementById("newItemValue");
    let o = document.createElement('option');
    o.textContent = newItemText.value;
    o.value = newItemValue.value;
    document.getElementById('menu').appendChild(o)
    newItemText.value = "";
    newItemValue.value = "";
}

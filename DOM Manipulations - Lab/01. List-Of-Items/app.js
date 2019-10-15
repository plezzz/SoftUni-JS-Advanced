function addItem() {
    let items = document.getElementById('items');
    let newText = document.getElementById('newItemText').value;
    let li = document.createElement("li");
    li.textContent = newText;
    items.appendChild(li)
}

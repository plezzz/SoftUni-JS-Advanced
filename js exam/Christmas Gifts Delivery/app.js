function solution() {
    document.querySelector("body > div.container > section:nth-child(1) > div > button").addEventListener("click", add);
    let gifts = [];

    function add(evt) {
        evt.preventDefault();
        let name = document.querySelector("body > div.container > section:nth-child(1) > div > input[type=text]").value;
        gifts.push(name);
        document.querySelector("body > div.container > section:nth-child(1) > div > input[type=text]").value ='';
        let li = document.createElement("li");
        li.setAttribute('class', 'gift');
        li.textContent = name;
        li.setAttribute('text',name);

        let div = document.createElement("div");

        let buttonSend = document.createElement("button");
        buttonSend.textContent = `Send`;
        buttonSend.setAttribute('id', 'sendButton');
        buttonSend.addEventListener("click", send);

        let buttonDiscard = document.createElement("button");
        buttonDiscard.textContent = `Discard`;
        buttonDiscard.setAttribute('id', 'discardButton');
        buttonDiscard.addEventListener("click", discard);

        div.appendChild(buttonSend);
        div.appendChild(buttonDiscard);
        li.appendChild(div);
        document.querySelector("body > div.container > section:nth-child(2) > ul").appendChild(li);

        if (gifts.length > 1){
            document.querySelector("body > div.container > section:nth-child(2) > ul").innerHTML = '';
            gifts.sort((a,b)=>{return a.localeCompare(b)});
            gifts.forEach(el=>{
                let li = document.createElement("li");
                li.setAttribute('class', 'gift');
                li.textContent = el;
                li.setAttribute('text',el);

                let div = document.createElement("div");

                let buttonSend = document.createElement("button");
                buttonSend.textContent = `Send`;
                buttonSend.setAttribute('id', 'sendButton');
                buttonSend.addEventListener("click", send);

                let buttonDiscard = document.createElement("button");
                buttonDiscard.textContent = `Discard`;
                buttonDiscard.setAttribute('id', 'discardButton');
                buttonDiscard.addEventListener("click", discard);

                div.appendChild(buttonSend);
                div.appendChild(buttonDiscard);
                li.appendChild(div);
                document.querySelector("body > div.container > section:nth-child(2) > ul").appendChild(li);
            })
        }
    }

    function send(e) {
       let el = e.target.parentElement.parentElement;
        el.removeChild(el.childNodes[1]);
        gifts.splice(gifts.indexOf(el.textContent),1);
        document.querySelector("body > div.container > section:nth-child(3) > ul").appendChild(el)
    }

    function discard(e) {
        let el = e.target.parentElement.parentElement;
        el.removeChild(el.childNodes[1]);
        gifts.splice(gifts.indexOf(el.textContent),1);
        document.querySelector("body > div.container > section:nth-child(4) > ul").appendChild(el)
    }
}

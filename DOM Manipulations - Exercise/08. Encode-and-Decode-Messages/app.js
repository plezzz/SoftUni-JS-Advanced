function encodeAndDecodeMessages() {
    const encodeAndSendBtn = document.querySelectorAll("button")[0];
    const receivedMsg = document.querySelectorAll("textarea")[1];

    encodeAndSendBtn.addEventListener("click", function encodeAndSend(e) {
        const button = e.target;
        const msg = button.parentNode.querySelector("textarea").value;
        const encodedMsg = encode(msg);

        button.parentNode.querySelector("textarea").value = "";
        receivedMsg.value = encodedMsg;
    });

    function encode(string) {
        let newString = "";
        for (let i = 0; i < string.length; i++) {
            const letter = string[i];
            newString += String.fromCharCode(letter.charCodeAt(0) + 1);
        }
        return newString;
    }

    const decodeBtn = document.querySelectorAll("button")[1];

    decodeBtn.addEventListener("click", function readDecoded(e) {
        const button = e.target;
        const msgToDecode = button.parentNode.querySelector("textarea").value;
        let decodedMsg = decode(msgToDecode);
        button.parentNode.querySelector("textarea").value = decodedMsg;
    });

    function decode(string) {
        let newString = "";
        for (let i = 0; i < string.length; i++) {
            const letter = string[i];
            newString += String.fromCharCode(letter.charCodeAt(0) - 1);
        }
        return newString;
    }
}

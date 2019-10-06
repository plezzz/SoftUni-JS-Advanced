growingWord = (function () {
    let state = 0;

    return function () {
        const colorMap = ["blue", "green", "red"];
        const word = document.querySelector("#exercise > p");

        let fontSize = window
            .getComputedStyle(word)
            .fontSize
            .replace("px", "");

        if (state >= colorMap.length) {
            state = 0;
        }

        word.style.color = colorMap[state];
        state++;
        word.style.fontSize = (fontSize === "0" ? "2" : fontSize * 2) + "px";
    }
})();

// Work fine in browser. Judge 60/100

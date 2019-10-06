function createArticle() {
    let title = document.getElementById("createTitle").value;
    let content = document.getElementById("createContent").value;
    if (title === "" || content === ""){
        return;
    }
    let articles = document.getElementById("articles");
    let article = document.createElement("article");
    let h3 = document.createElement('h3');
    let p = document.createElement('p');

    h3.innerHTML = title;
    p.innerHTML = content;
    article.appendChild(h3);
    article.appendChild(p);
    articles.appendChild(article);
    document.getElementById("createTitle").value = "";
    document.getElementById("createContent").value = ""
}

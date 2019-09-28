function solve(json) {
    let array = JSON.parse(json);
    let result = "<table>\n  <tr><th>name</th><th>score</th></tr>\n";
    for (let i = 0; i < array.length; i++) {
        result += `  <tr><td>${htmlEscape(array[i]["name"])}</td><td>${htmlEscape(array[i]["score"])}</td></tr>\n`
    }
    result += "</table>";
    return result;

    function htmlEscape(text) {
        let replaced = new String(text);
        replaced = replaced.split('&').join('&amp;');
        replaced = replaced.split('<').join('&lt;');
        replaced = replaced.split('>').join('&gt;');
        replaced = replaced.split('"').join('&quot;');
        replaced = replaced.split('\'').join('&#39;');
        return replaced;
    }
}


console.log(solve(['[{"name":"Pesho","score":479}, {"name":"Gosho","score":205}]']));
// <table>
//   <tr><th>name</th><th>score</th></tr>
//   <tr><td>Pesho</td><td>479</td></tr>
//   <tr><td>Gosho</td><td>205</td></tr>
// </table>

console.log(solve(['[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki", "score":205}]']));
// <table>
//   <tr><th>name</th><th>score</th></tr>
//   <tr><td>Pesho &amp; Kiro</td><td>479</td></tr>
//   <tr><td>Gosho, Maria &amp; Viki</td><td>205</td></tr>
// </table>

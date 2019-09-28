function solve(json) {
    let array = JSON.parse(json);
    let result = "<table>\n   <tr>";

    for (let key of Object.keys(array[0]))
        result += `<th>${key}</th>`;

    result += "</tr>\n";

    for (let obj of array) {
        result += '   <tr>';
        for (let value of Object.keys(obj)) {
            result += '<td>' + htmlEscape(obj[value])+'</td>'
        }
        result+='</tr>\n';
    }
    return result + "</table>";

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

console.log(solve(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']));
// <table>
//   <tr><th>name</th><th>score</th></tr>
//   <tr><td>Pesho</td><td>479</td></tr>
//   <tr><td>Gosho</td><td>205</td></tr>
// </table>

console.log(solve(['[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]']));
// <table>
//   <tr><th>name</th><th>score</th></tr>
//   <tr><td>Pesho &amp; Kiro</td><td>479</td></tr>
//   <tr><td>Gosho, Maria &amp; Viki</td><td>205</td></tr>
// </table>

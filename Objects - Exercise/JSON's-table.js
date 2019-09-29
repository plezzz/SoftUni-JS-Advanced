function solve(data) {
    let str = "<table>\n";
    for (let i = 0; i < data.length; i++) {
        let obj = JSON.parse(data[i]) ;
        str+= ` <tr>\n     <td>${obj["name"]}</td>\n     <td>${obj["position"]}</td>\n     <td>${obj["salary"]}</td>\n </tr>\n`
    }
    return str + "</table>"
}

console.log(solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']
));
// <table>
// 	<tr>
// 		<td>Pesho</td>
// 		<td>Promenliva</td>
// 		<td>100000</td>
// 	</tr>
// 	<tr>
// 		<td>Teo</td>
// 		<td>Lecturer</td>
// 		<td>1000</td>
// 	</tr>
// 	<tr>
// 		<td>Georgi</td>
// 		<td>Lecturer</td>
// 		<td>1000</td>
// 	</tr>
// </table>

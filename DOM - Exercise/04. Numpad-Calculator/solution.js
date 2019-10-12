function solve() {
    let operands = ["/", "*", "-", "+",];
    let resultStr = "";
    let operator;
    let buttons = document.getElementsByTagName("button");
    Array.from(buttons).map(x => x.addEventListener("click", function calc(e) {
        let btn = e.target.value;
        if (btn === "Clear") {
            resultStr = undefined;
            resultStr = "";
            document.getElementById("expressionOutput").innerHTML = resultStr;
            document.getElementById("resultOutput").innerHTML = resultStr;
        }
        else if (operands.includes(btn)) {
            operator = btn;
            resultStr += ` ${operator} `;
            document.getElementById("expressionOutput").innerHTML = resultStr;
        }
        else if (btn === "=") {
            let val = resultStr.split(operator).map(x => x.trim()).filter(x => x != "");
            if (val.length === 1) {
                resultStr = "NaN";
            }
            else {
                switch (operator) {
                    case "/": resultStr = Number(val[0]) / Number(val[1]); break;
                    case "*": resultStr = Number(val[0]) * Number(val[1]); break;
                    case "+": resultStr = Number(val[0]) + Number(val[1]); break;
                    case "-": resultStr = Number(val[0]) - Number(val[1]); break;
                }
            }
            document.getElementById("resultOutput").innerHTML = resultStr;
        }
        else {
            resultStr += btn;
            document.getElementById("expressionOutput").innerHTML = resultStr;
        }
    }))
}

// function solve() {
//     let exp = document.getElementById('expressionOutput');
//     let res = document.getElementById('resultOutput');
//     let temp = "";
//
//     let input = [];
//     document.addEventListener('click', (e) => {
//         let value = e.target.value;
//         if (value !== undefined) {
//             if (value === 'Clear') {
//                 input = [];
//                 exp.textContent = "";
//                 res.textContent = "";
//                 temp = "";
//             } else if (value === "=") {
//                 addAndClear(temp);
//                 res.textContent = result()
//             } else {
//                 exp.textContent += value;
//                 if (value === "-" || value === "+" || value === "*" || value === "/") {
//                     addAndClear(temp);
//                     addAndClear(value)
//                 } else {
//                     temp += value;
//                 }
//             }
//         }
//     });
//
//     function addAndClear(value) {
//         input.push(value);
//         temp = "";
//     }
//
//     function result() {
//         input= input.filter(Boolean);
//         for (let i = 0; i < input.length; i++) {
//             let firstDigit = Number(input.shift());
//             let operator = input.shift();
//             let secondDigit = Number(input.shift());
//             let res = calc(firstDigit, secondDigit, operator);
//             input.unshift(res);
//             if (input.length > 1) {
//                 i = 0
//             }
//         }
//         return input[0]
//     }
//
//     function calc(x, y, operator) {
//         let math = {
//             '+': function (x, y) {
//                 return x + y
//             },
//             '-': function (x, y) {
//                 return x - y
//             },
//             '*': function (x, y) {
//                 return x * y
//             },
//             '/': function (x, y) {
//                 return x / y
//             }
//         };
//         return math[operator](x, y)
//     }
// }

function solve(data) {
    let arraysSet = [];

    for(let line of data) {
        let arr = JSON.parse(line);
        arraysSet.push(arr.map(Number).sort((a, b) => b - a));
    }

    for(let i=0; i<arraysSet.length; i++) {
        for(let j= i+1; j<arraysSet.length; j++) {
            if(compareArrays(arraysSet[i], arraysSet[j])){
                arraysSet.splice(j, 1);
                j--;
            }
        }
    }

    arraysSet.sort((a, b) => a.length - b.length);
    arraysSet.forEach(a => console.log("[" + a.join(", ") + "]"));

    function compareArrays(arr1, arr2) {
        if(arr1.length != arr2.length) {
            return false;
        } else {
            for(let i=0; i<arr1.length; i++) {
                if(arr1[i] != arr2[i]){
                    return false;
                }
            }
            return true;
        }
    }
}

solve(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]
);
// [13, 10, 2, 1, 0, -17]
// [4, 3, 2, 1, 0, -1, -2, -3]
solve(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"]
);
// [80.099, 7.339, 7.18, 7.14]

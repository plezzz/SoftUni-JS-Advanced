function solve(name, age, weight, height) {
    let BMI = Math.round(weight / Math.pow(height, 2) * 10000);
    let person = {};

    let status = function (BMI) {
        if (BMI < 18.5)
            return "underweight";
        else if (BMI >= 18.5 && BMI < 25)
            return "normal";
        else if (BMI >= 25 && BMI < 30)
            return "overweight";
        else if (BMI >= 30)
            return "obese";
    };

    Object.assign(person, {
        'name': name,
        'personalInfo': {
            'age': age,
            'weight': weight,
            'height': height,
        },
        'BMI': BMI,
        'status': status(BMI)
    });
    status(BMI) === "obese" ? Object.assign(person, {'recommendation': 'admission required'}) : null;
    return person
}

console.log(solve('Peter', 29, 75, 182));
// { name: 'Peter',
//   personalInfo: {
//     age: 29,
//     weight: 75,
//     height: 182
//   }
//   BMI: 23
//   status: 'normal' }

console.log(solve('Honey Boo Boo', 9, 57, 137));
// { name: 'Honey Boo Boo',
// personalInfo: {
//   age: 9, weight: 57, height: 137
// },
// BMI: 30,
// status: 'obese', recommendation: 'admission required' }


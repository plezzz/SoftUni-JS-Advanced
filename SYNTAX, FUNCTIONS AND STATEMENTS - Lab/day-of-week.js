function solve(x) {

    switch (x) {
        case'Monday':
            result = 1;
            break;
        case 'Tuesday':
            result = 2;
            break;
        case 'Wednesday':
            result = 3;
            break;
        case 'Thursday':
            result = 4;
            break;
        case 'Friday':
            result = 5;
            break;
        case 'Saturday':
            result = 6;
            break;
        case 'Sunday':
            result = 7;
            break;
        default:
            result = "error";
            break;
    }
    console.log(result)
}

solve("Monday");
// 1
solve('Tuesday');
// 2
solve('Wednesday');
// 3
solve('Thursday');
// 4
solve('Friday');
// 5
solve('Saturday');
// 6
solve('Sunday');
// 7
solve("Invalid");
// error
solve(1234);
// error
solve(true);
// error


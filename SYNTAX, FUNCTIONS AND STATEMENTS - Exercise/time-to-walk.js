function solve(steps, length, speed) {

    let m = steps * length;
    let time = (m / 1000) / speed;
    let seconds = time * 3600 + 1;
    let brakes = Math.floor(m / 500);

    let date = new Date(null);
    date.setSeconds(seconds);
    date.setMinutes(date.getMinutes() + brakes);
    let timeString = date.toISOString().substr(11, 8);

    console.log(timeString);
}

solve(4000, 0.60, 5);
// 00:32:48
solve(2564, 0.70, 5.5);
// 00:22:35

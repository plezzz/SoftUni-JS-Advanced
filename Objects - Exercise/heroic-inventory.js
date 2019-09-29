function solve(input) {
    let heroes = [];

    for(let line of input) {
        let tokens = line.split(/\s*\/\s*/);
        let name = tokens[0];
        let level = Number(tokens[1]);
        let items = [];

        if(tokens.length > 2) {
            items = tokens[2].split(", ");
        }

        let hero = {name: name, level: level, items: items};
        heroes.push(hero);
    }

   return JSON.stringify(heroes);
}

/*function solve(data) {
    let heroes= [];
    for (let i = 0; i < data.length; i++) {
        let [name, level, items] = data[i].split(" / ");
         items = items.split(", ");
        heroes.push({"name": name,"level": Number(level), "items": items});
    }
    return JSON.stringify(heroes)
}*/


console.log(solve(['Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']));
// [{"name":"Isacc","level":25,"items":["Apple","GravityGun"]},
// {"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},
// {"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}]

console.log(solve(['Jake / 1000 / Gauss, HolidayGrenade']));
// [{"name":"Jake","level":1000,"items":["Gauss","HolidayGrenade"]}]

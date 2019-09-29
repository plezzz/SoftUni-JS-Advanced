function solve(data) {
    let cleanNames =[...new Set(data)];
    cleanNames.sort((a, b) => {
       return  a.length-b.length || a.localeCompare(b)});
let str ="";
    for (let line of cleanNames){
        str +=line+"\n"
    }
return str
}

console.log(solve(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston',
    'Aizen',]
));
// Aizen
// Ariel
// Billy
// Lilly
// Ashton
// Keyden
// Braston
// Kutcher

console.log(solve(['Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot']
));
// Rot
// Dean
// Iris
// Biser
// Indie
// Isacc
// Bounty
// Denise
// Renard
// Enfuego
// Benjamin
// Ignatius

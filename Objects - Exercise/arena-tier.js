function solve(input) {
    let pool = {};
    for (let data of input) {
        if (data === 'Ave Cesar') {
            break;
        }
        let splitted = data.split(/ -> | vs /);

        if (splitted.length > 2) {
            let gladiator = splitted[0].trim();
            let technique = splitted[1].trim();
            let skill = Number(splitted[2].trim());

            if (pool.hasOwnProperty(gladiator) === false) {
                pool[gladiator] = {
                    totalPoints: 0,
                    techniques: {}
                };
            }

            if (pool[gladiator]['techniques'].hasOwnProperty(technique) === false) {
                pool[gladiator]['techniques'][technique] = 0;
                pool[gladiator]["totalPoints"] += skill;
            }

            if (skill > pool[gladiator]['techniques'][technique]) {
                pool[gladiator]['techniques'][technique] = skill;

                let diff = skill - pool[gladiator]['techniques'][technique];
                pool[gladiator]["totalPoints"] += diff;
            }
        }

        //GLADIATORS FIGHT
        else {
            let gladiator1 = splitted[0].trim();
            let gladiator2 = splitted[1].trim();

            if (pool.hasOwnProperty(gladiator1) && pool.hasOwnProperty(gladiator2)) {
                let haCommonTechnique = false;

                for (let t1 of Object.entries(pool[gladiator1]['techniques'])) {
                    for (let t2 of Object.entries(pool[gladiator2]['techniques'])) {
                        if (t1[0] === t2[0]) {
                            haCommonTechnique = true;
                            break;
                        }
                    }
                    if (haCommonTechnique) {
                        break;
                    }
                }

                if (haCommonTechnique) {
                    if (pool[gladiator1]["totalPoints"] > pool[gladiator2]["totalPoints"]) {
                        delete pool[gladiator2];
                    }
                    else if (pool[gladiator2]["totalPoints"] > pool[gladiator1]["totalPoints"]) {
                        delete pool[gladiator1];
                    }
                }
            }
        }
    }

    let result = Object.entries(pool).filter(x => x[1] !== null)
        .sort((a, b) => b[1]["totalPoints"] - a[1]["totalPoints"])
        .sort((a, b) => a[0] - b[0]);

    for (let gladiator of result) {
        console.log(`${gladiator[0]}: ${gladiator[1]["totalPoints"]} skill`);

        let sortedTechniques = Object.entries(gladiator[1]["techniques"])
            .sort((a, b) => b[1] - a[1])
            .sort((a, b) => a[0] - b[0]);

        for (let technique of sortedTechniques) {
            console.log(`- ${technique[0]} <!> ${technique[1]}`);
        }
    }
}

solve(['Pesho -> BattleCry -> 400',
'Gosho -> PowerPunch -> 300',
'Stamat -> Duck -> 200',
'Stamat -> Tiger -> 250',
'Ave Cesar'
]);
// Stamat: 450 skill
// - Tiger <!> 250
// - Duck <!> 200
// Pesho: 400 skill
// - BattleCry <!> 400
// Gosho: 300 skill
// - PowerPunch <!> 300

solve(['Pesho -> Duck -> 400',
'Julius -> Shield -> 150',
'Gladius -> Heal -> 200',
'Gladius -> Support -> 250',
'Gladius -> Shield -> 250',
'Pesho vs Gladius',
'Gladius vs Julius',
'Gladius vs Gosho',
'Ave Cesar',
]);
// Gladius: 700 skill
// - Support <!> 250
// - Shield <!> 250
// - Heal <!> 200
// Pesho: 400 skill
// - Duck <!> 400

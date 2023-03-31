function inventory(list) {
    let heroes = [];

    list.forEach(line => {
        let [name, level, items] = line.split(' / ');
        let surrentHero = {
            name,
            level: Number(level),
            items
        };
        heroes.push(surrentHero);
    });
    heroes.sort((a, b) => a.level - b.level);

    heroes.forEach((hero) => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    });
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    );
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]
    );
function carWash(array) {
    let Value = 0;
    for (let index of array) {
        switch (index) {
            case "soap": Value += 10; break;
            case "water": Value += (Value * 0.2); break; // value *= 1.2;
            case "vacuum cleaner": Value += (Value * 0.25); break; //value *= 1.25;
            case "mud": Value *= 0.9; break;
        }
    }
    console.log(`The car is ${Value.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);

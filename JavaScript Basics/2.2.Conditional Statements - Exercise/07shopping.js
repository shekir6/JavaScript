function demo(input) {
    let budget = Number(input[0]);
    let GPU = Number(input[1]);
    let CPU = Number(input[2]);
    let RAM = Number(input[3]);

    let moneyForGPU = GPU * 250;
    let moneyForCPU = moneyForGPU * 0.35 * CPU;
    let moneyForRAM = moneyForGPU * 0.1 * RAM;

    let totalSum = moneyForGPU + moneyForCPU + moneyForRAM;

    if (GPU > CPU) {
        totalSum = totalSum * 0.85;
    }

    if (totalSum <= budget) {
        console.log(`You have ${(budget - totalSum).toFixed(2)} leva left!`);
    } else {
        console.log(
            `Not enough money! You need ${(totalSum - budget).toFixed(2)} leva more!`
        );
    }
}
function foodDelevery(input) {
    let chiken = Number(input[0]);
    let fish = Number(input[1]);
    let vegan = Number(input[2]);

    let priceChiken = chiken * 10.35;
    let priceFish = fish * 12.40;
    let priceVegan = vegan * 8.15;

    let totalCost = priceChiken + priceFish + priceVegan;
    let totalPriceDessert = (20 / 100) * totalCost;
    let totalPrice = totalCost + totalPriceDessert + 2.50;
    console.log(totalPrice);

}
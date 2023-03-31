function yardGreening (input){
    let yard = Number(input[0]);
    let praceForLandscaping = yard * 7.61;
    let discount = (18 / 100) * praceForLandscaping;
    let finalPrice = praceForLandscaping -discount;
    console.log(`The final price is: ${finalPrice} lv.
The discount is: ${discount} lv.`);

}
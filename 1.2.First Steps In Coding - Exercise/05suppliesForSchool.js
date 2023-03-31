function suppliesForSchool(input) {
    
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let preparationsLitr = Number(input[2]);
    let procent = Number(input[3]);

    let pricePens = pens * 5.80;
    let priceMarkers = markers * 7.20;
    let pricepreparationsLitr = preparationsLitr * 1.20;

    let priceAllMaterials = pricePens + priceMarkers + pricepreparationsLitr;
    let discountedPrice = priceAllMaterials - (priceAllMaterials * 0.25);

    console.log(discountedPrice);

}
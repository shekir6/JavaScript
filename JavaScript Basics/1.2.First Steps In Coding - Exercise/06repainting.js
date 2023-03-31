function repainting(input) {
    let nylon = Number(1.50);
    let paint = Number(14.50);
    let thinner = Number(5.00);

    let quantityNylon = Number(input[0]);
    let quantityPaint = Number(input[1]);
    let quantityThinner = Number(input[2]);
    let hours = Number(input[3]);

    let sumNylon = (quantityNylon + 2) * nylon;
    let sumPaint = (quantityPaint + (quantityPaint * 0.1)) * paint;
    let sumThinner = quantityThinner * thinner;
    let bags = Number(0.40)
    let totalSum = sumNylon + sumPaint + sumThinner + bags;
    let sumMasters = (totalSum * 0.3) * hours;
    let finalAmount = totalSum + sumMasters;


    console.log(finalAmount);
}
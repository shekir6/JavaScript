function depositCalculator(input) {
    let deposit = Number(input[0]);
    let term = Number(input[1]);
    let interest = Number(input[2]);

    let accruedInterest = deposit * (interest) / 100;
    let monthInterest = accruedInterest / 12;
    let totalSum = deposit + (term * monthInterest);

    console.log(totalSum);

}
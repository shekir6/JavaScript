function basketball(input) {
    let annualTax = Number(input[0]);

    let shoes = (annualTax - (annualTax * (40 / 100)));
    let sportWear = (shoes - (shoes * (20 / 100)));
    let bool = sportWear / 4;
    let acssesoars = bool / 5;

    let all = annualTax + shoes + sportWear + bool + acssesoars;
    console.log(all);

}
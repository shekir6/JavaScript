function fishTank(input) {
    let length = Number(input[0]);
    let wight = Number(input[1]);
    let height = Number(input[2]);
    let precentageReserve = Number(input[3]);

    let tankVolume = length * wight * height;

    let tankVolumeDM = tankVolume * 0.001;

    let total = tankVolumeDM - tankVolumeDM * (precentageReserve / 100);

    console.log(total);
}
function binaryToDecimals(numberAsString) {
    
    let decimal = 0;
    let power = numberAsString.length - 1;
    for (let i = 0; i < numberAsString.length; i++) {
        decimal += Number(numberAsString[i]) * Math.pow(2, power);
        power--;
    }
    console.log(decimal);
}
binaryToDecimals("00001001");
binaryToDecimals("11110000");
function signCheck(num1, num2, num3) {
    let negativeNumbers = 0;
    num1 < 0 ? negativeNumbers++ : null;
    num2 < 0 ? negativeNumbers++ : null;
    num3 < 0 ? negativeNumbers++ : null;
    negativeNumbers === 2 || negativeNumbers === 0 ? console.log('Positive') : console.log('Negative');
    console.log(negativeNumbers);
}
signCheck( 5,
    12,
   -15
   );
signCheck(-6,
    -12,
     14
    );
signCheck(-1,
    -2,
    -3
    );
signCheck(-5,
    1,
    1
   );




   function signCheck(numOne, numTwo, numThree) {
    let result = '';
    if (numOne == 0 || numTwo == 0 || numThree == 0) {
        result = 'Positive';
    } else if (numOne > 0 && numTwo > 0 && numThree > 0) {
        result = 'Positive';
    } else if (numOne > 0 && numTwo > 0 && numThree < 0) {
        result = 'Negative';
    } else if (numOne > 0 && numTwo < 0 && numThree > 0) {
        result = 'Negative';
    } else if (numOne > 0 && numTwo < 0 && numThree < 0) {
        result = 'Positive';
    } else if (numOne < 0 && numTwo > 0 && numThree > 0) {
        result = 'Negative';
    } else if (numOne < 0 && numTwo > 0 && numThree < 0) {
        result = 'Positive';
    } else if (numOne < 0 && numTwo < 0 && numThree > 0) {
        result = 'Positive';
    } else if (numOne < 0 && numTwo < 0 && numThree < 0) {
        result = 'Negative';
    }
    console.log(result);
}
signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);
signCheck(0,-2, 0)
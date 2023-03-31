function integerAndFloat(firstNum, secondNum, tirdNum) {
    let sum = firstNum + secondNum + tirdNum;
    
    sum % 1 === 0 ? sum += '- Integer': sum += '- Float';

    // ^^^ first option ^^^
    

    if (sum % 1 === 0) {
        sum += ' - Integer'

    } else {
        sum += ' - Float'
    }

    console.log(sum);

    // ^^^ second option ^^^

}
integerAndFloat(9, 100, 1.1);
console.log('---------');
integerAndFloat(100, 200, 303);
// sum % 1 === 0 ? sum += '- Integer': sum += '- Float';
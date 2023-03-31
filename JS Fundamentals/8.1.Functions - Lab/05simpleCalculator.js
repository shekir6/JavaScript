function simpleCalculator(numOne, numTwo, operator) {
    if (operator === "multiply") {
        return numOne * numTwo;
    } else if (operator === "divide") {
        return numOne / numTwo;
    } else if (operator === "add") {
        return numOne + numTwo;
    } else if (operator === "subtract") {
        return numOne - numTwo;
    }

}
console.log(simpleCalculator(5,
    5,
    'multiply'
))
simpleCalculator(40,
    8,
    'divide'
);

simpleCalculator(12,
    19,
    'add'
);
simpleCalculator(50,
    13,
    'subtract'
);
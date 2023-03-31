function printAndSum(startNumber, endNumber) {
 
    let sum = 0;
    let output = '';
 
    for (let currentNumber = startNumber; currentNumber <= endNumber; currentNumber++) {
 
        if(currentNumber === endNumber){
            output += `${currentNumber}`;
        }else{
            output += `${currentNumber} `;
        }
        sum += currentNumber;
    }
    console.log(output);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
console.log('------------------');
printAndSum(0, 26);
console.log('-------------------');
printAndSum(50, 60);
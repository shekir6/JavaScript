function processOddNumbers(arr) {
    
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            output.push(Number(arr[i]) * 2);
        }
    }
    console.log(output.reverse().join(" "));
}
processOddNumbers([10, 15, 20, 25]);
console.log('---------------');
processOddNumbers([3, 0, 10, 4, 7, 3]);

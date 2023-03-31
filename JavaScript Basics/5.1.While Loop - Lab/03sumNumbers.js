function sumNumbers(input){
    let index = 0;
    let n =Number(input[index]);
    index++;
    let sum = 0;
    while(sum < n) {
        let tempNum = Number(input[index]);
        index++;
        sum += tempNum;   

    }
    console.log(sum);
}
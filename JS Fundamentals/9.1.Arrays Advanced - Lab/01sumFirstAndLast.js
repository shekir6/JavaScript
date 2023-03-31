function sumFirstAndLast(array){

    let first = Number(array.shift());  
    let last = Number(array.pop());      
    console.log(first + last);
    //(array) => console.log(Number(array.shift()) + Number(array.pop()))
}
sumFirstAndLast(['20', '30', '40'])
sumFirstAndLast(['5', '10'])

console.log('----------------------------');


function endSum(numbers) {
    let firstElement = Number(numbers[0]);

    let lastElement = Number(numbers.pop());

    let sum = firstElement + lastElement;

    console.log(sum);
}
endSum(['20', '30', '40']);
endSum(['5', '10']);
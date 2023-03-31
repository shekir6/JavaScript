function negativeOrPositiveNumbers(array) {
    let output = [];    

    for (let i of array) {      
        let element = Number(i)     
        if (element < 0) {          
            output.unshift(element);   
        } else {                        
            output.push(element);       
        }
    }

    for (let print of output){          
        console.log(print)
    }
}

/* Еквивалент 
function negativeOrPositiveNumbers(array) {
    let resultArray = [];
    array.forEach(el => el < 0 ? resultArray.unshift(el) : resultArray.push(el));
    console.log(resultArray.join("\n"));
}

*/
negativeOrPositiveNumbers(['7', '-2', '8', '9']);
console.log('----------------------------');
negativeOrPositiveNumbers(['3', '-2', '0', '-1']);

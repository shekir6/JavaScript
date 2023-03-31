function numberModification(number){
    numberAsArray = number.toString().split("") 
    let finalAverage = 0

    while (finalAverage <= 5){          

        let sum = 0
        for (let i of numberAsArray) {  
            sum += Number(i)
        }

        finalAverage = sum / numberAsArray.length   
        if (finalAverage > 5){                      
            break;
        } else {
            numberAsArray.push('9')             
        }

    }
    console.log(numberAsArray.join(""))
}


/* Еквивалент
function numberModification(num) {
    while (String(num).split("").map(Number).reduce((a, b) => a + b, 0) / String(num).length <= 5) {
        num += "9";
    }
    console.log(num);
}
*/
numberModification(101);
numberModification(5835);

function bombNumbers(arrayOne, arrayTwo){

    let specialBombNumber = arrayTwo.shift()    
    let power = arrayTwo.shift()                

    let indexOfBombNumber = arrayOne.indexOf(specialBombNumber)

    while (indexOfBombNumber !== - 1){      
        let start = Math.max(0, indexOfBombNumber - power)  
        let explosion = power * 2 + 1        
        arrayOne.splice(start, explosion)  
        indexOfBombNumber = arrayOne.indexOf(specialBombNumber) 
    }

    let sum = arrayOne.reduce((a,b) => a + b, 0) 
    console.log(sum)    
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
    );
// bombNumbers([1, 4, 4, 2, 8, 9, 1],
//     [9, 3]
//     )
// bombNumbers([1, 7, 7, 1, 2, 3],
//     [7, 1]
//     );
// bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
//     [2, 1]
//     );
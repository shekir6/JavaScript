function lastKNumbersSequence(n, k){

    let output = [1]    
    
    for (let i = 1; i < n; i++){    
        let lastK = output.slice(-k)    
        let sum = 0                     

        for (let j of lastK) {      
            sum += Number(j)        
        }

        output.push(sum)        
    }
    
    console.log(output.join(" "))    
}
lastKNumbersSequence(6, 3)
lastKNumbersSequence(8, 2)
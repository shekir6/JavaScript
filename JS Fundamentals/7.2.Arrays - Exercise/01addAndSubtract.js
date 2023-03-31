function addAndSubstract(arr) {
    let sumOriginalArr = 0;                
    let sumNewArr = 0;                    
                        
    for (let i = 0; i < arr.length; i++) {
        sumOriginalArr += arr[i]        
        if (arr[i] % 2 === 0) {
            arr[i] += i;
        } else {
            arr[i] -= i;
        }
        sumNewArr += arr[i]             
    }

    console.log(arr);
    console.log(sumOriginalArr);
    console.log(sumNewArr);
}
addAndSubstract([5, 15, 23, 56, 35]);
console.log("---------------------");

addAndSubstract([-5, 11, 3, 0, 2]);
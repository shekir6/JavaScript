function sorting(array) {
    let sorted = array.sort((a, b) => a - b);   
    let output = [];                             

    while (sorted.length > 0) {              
        let biggest = sorted.pop();          
        output.push(biggest);                
        let smallest = sorted.shift();       
        output.push(smallest);               
    }
    console.log(output.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);

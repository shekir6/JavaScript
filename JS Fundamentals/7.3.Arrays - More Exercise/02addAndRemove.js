function addAndRemove(array) {
    let output = [];                            

    for (let index = 1; index <= array.length; index++) {   
        if (array[index - 1] === "add") {               
            output.push(index);                         
        } else {                                         
            output.pop();                               
        }
    }
    if (output.length === 0) {              
        console.log("Empty");               
    } else {                                
        console.log(output.join(" "));      
    }
}
addAndRemove(["add", "add", "add", "add"]);
addAndRemove(["add", "add", "remove", "add", "add"]);
addAndRemove(["remove", "remove", "remove"]);
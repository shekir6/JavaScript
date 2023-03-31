function rotateArray(array) {
    let rotations = Number(array.pop());  
    for (let index = 0; index < rotations; index++) {   
        let popped = array.pop();  
        array.unshift(popped);  
    }
    console.log(array.join(" "));
}
rotateArray(["1", "2", "3", "4", "2"]);
rotateArray(["Banana", "Orange", "Coconut", "Apple", "15"]);
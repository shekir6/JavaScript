// let total  = 0;
// let cart = [5, 10, 15, 20]

// function chechOut(element){
//     total += element;
// }
// cart.forEach(chechOut)
// console.log("Your total is:" + total );
// function test(arr) {
//     let totalPrice = [];
 
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] === 5) {
//         totalPrice.push(arr[i]);
//     } else {
//         arr.sort((a, b) => a + b)
//     }   
//     return totalPrice;      
// }

// }
// console.table(test([4, 5, 7, 10, 50, 1]));

// solution number
function personInfo(firstName, lastName, age) {
    let myPersonInfo = {
        firstName: firstName,
        lastName: lastName,
        age: age,
    }
    return myPersonInfo;
}
console.log(personInfo("peter", "Pan", "20"));

/*
key
value
entries
Кои типове са референтни и кои не 
arr, Object, function са референтни типове 
*/

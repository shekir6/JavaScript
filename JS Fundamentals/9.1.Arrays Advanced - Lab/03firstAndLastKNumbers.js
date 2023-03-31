function firstAndLastKNumbers(array) {
    let count = array.shift();
    console.log(array.slice(0, count).join(" "));
    console.log(array.slice(-count).join(" "));
}
firstAndLastKNumbers([2, 
    7, 8, 9]
    );
    console.log('------------');
firstAndLastKNumbers([3,
    6, 7, 8, 9]
   );

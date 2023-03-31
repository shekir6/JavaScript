function listOfProdunct(input) {
    let sort = input.sort();
    let sortLengt = sort.length;

    for (let i = 0; i < sortLengt; i++) {
        console.log(`${i + 1}.${sort[i]}`);

        
    }

}
listOfProdunct(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
console.log('--------------------------');
listOfProdunct(['Watermelon', 'Banana', 'Apples']);



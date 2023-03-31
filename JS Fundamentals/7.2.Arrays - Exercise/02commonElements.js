function commonElements(array1, array2) {

    for (let j = 0; j < array1.length; j++) {
        for (let i = 0; i < array2.length; i++) {
            if (array1[j] === array2[i]) {
                console.log(array1[j])
            }
        }
    }
}

// second solution

function commonElements(arr1, arr2) {
    for(let el of arr1) {
        if(arr2.includes(el)) {
            console.log(el);

        }

    }

}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])
console.log("------------------------");
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l'])



commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])
console.log("------------------------");
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l'])
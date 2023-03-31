// let fullName = 'Shekir Troh'
// let firstName;
// let lastName;
// firstName = fullName.slice(0, 6);
// lastName = fullName.slice(fullNamename);
// console.log(firstName + lastName);

// let car = {
//     model: 'Passat',
//     year: '2004',
//     color: 'black'

// }
// for(let param in car) {
//     let fullSpecific = (car[param])
//     console.log(fullSpecific);


// }


// console.log('Good Morning Shekir');
// let num = 3;
// let arr = [5, 2, 3, 4, 1, 6];
// arr = arr.splice(0, num);
// console.log(arr);

function searchForANumber(arr1, arr2) {
    let array = arr1;

    let elementsToTake = arr2[0];
    let elementsToDelete = arr2[1];
    let numToSearchFor = arr2[2];

    let newArr = array.slice(0, elementsToTake);

    let arrDeleted = newArr.splice(elementsToDelete);
    let countOccurs = 0;

    for (let i = 0; i < arrDeleted.length; i++) {

        let currNum = arrDeleted[i];

        if (currNum === numToSearchFor) {
            countOccurs++;
        }
    }
    console.log(`Number ${numToSearchFor} occurs ${countOccurs} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]
);
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]
);

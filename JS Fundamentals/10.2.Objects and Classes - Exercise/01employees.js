function employees(data) {
    let obj = {};
    for (let name of data) {
        obj[name] = name.length;
    }

    for (let key of Object.keys(obj)) {
        console.log(`Name: ${key} -- Personal Number: ${obj[key]}`);
    }

}
// another solution 
function employees(input){

    let listOfNames = {}    // Създаваме празен обект, в който да добавяме нашите служителите

    for (let employee of input ){   // Минаваме през масива, за да вземем всеки един служител
        listOfNames.name = employee // Създаваме си property name към обекта listOfNames и неговата стойност, ще е името от инпута на всеки служител
        listOfNames.personalNum = employee.length   // Създаваме си property personalNum към обекта listOfNames  което е дължината на името на служитела 
        console.log(`Name: ${listOfNames.name} -- Personal Number: ${listOfNames.personalNum}`)
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
);
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]
);
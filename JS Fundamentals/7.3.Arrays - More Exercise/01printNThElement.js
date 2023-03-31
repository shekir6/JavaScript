function printNthElement(arr) {
    let output = [];
    let step = Number(arr.pop());
    for (let index = 0; index < arr.length; index += step) {

        output.push(arr[index]);

    }
    console.log(output.join(" "));

}
printNthElement(["5", "20", "31", "4", "20", "2"]);
printNthElement(["dsa", "asd", "test", "test", "2"]);
printNthElement(["1", "2", "3", "4", "5", "6"]);

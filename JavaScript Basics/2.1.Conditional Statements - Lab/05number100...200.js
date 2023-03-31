function numbers(input) {
    let type = input[0];
    let result = 0;

    if (type < 100) {
        result = "Less than 100";
    } else if (type === 120) {
        result = "Between 100 and 200"
    } else if (type <= 200) {
        result = "Between 100 and 200"
    } else if (type >= 200) {
        result = "Greater than 200"

    }
    console.log(result);
}
function password(input) {
    let index = 0;
    let username = input[index];
    index++;
    let pass = input[index];
    index++
    let tempPass = input[index];
    index++;

    while (tempPass !== pass) {
        tempPass = input[index];
        index++

    }
    console.log(`Welcome ${username}!`);

}
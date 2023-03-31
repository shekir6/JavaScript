function passwordGuess(input){
    let type = input[0];
    let result = 0;

    if(type ==="qwerty"){
        result = "Wrong password!";
    } else if(type === "s3cr3t!P@ssw0rd"){
        result = "Welcome";
    } else if(type ==="s3cr3t!p@ss"){
        result = "Wrong password!";
    }
    console.log(result);
}
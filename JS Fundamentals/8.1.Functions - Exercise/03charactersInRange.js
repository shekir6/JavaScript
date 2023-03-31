function charactersInRange(char1, char2) {
    let charCodeFromChar1 = char1.charCodeAt(0);
    let charCodeFromChar2 = char2.charCodeAt(0);

    let startIndex = charCodeFromChar1 > charCodeFromChar2 ? charCodeFromChar2: charCodeFromChar1;
    let ednIndex = charCodeFromChar1 > charCodeFromChar2 ? charCodeFromChar1: charCodeFromChar2;

    let buff = "";
    for(let i = startIndex + 1; i < ednIndex; i++)  {
        buff += String.fromCharCode(i) + " "; 
    }
    console.log(buff); 
    

}
charactersInRange('a',
'd'
);

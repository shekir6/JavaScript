function echoType(param) {
    console.log(typeof param);

    if(typeof param === 'string' || typeof param === 'number') {
        console.log(param);
    } else {
        console.log('Parameter is not suitable for printing');
    }

}
echoType('Hello, JavaScript!');
console.log('------------');
echoType(18);
console.log('------------');
echoType(null);
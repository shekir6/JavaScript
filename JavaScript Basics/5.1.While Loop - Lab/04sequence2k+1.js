function sequence2k1(input) {
    index = 0;
    let n = Number(input[index]);
    let k = 1;
    while (k <= n) {
        console.log(k);
        k = k * 2 + 1;
    }
}
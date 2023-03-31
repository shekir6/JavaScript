function train(array) {
    let train = array.shift().split(" ").map(Number);
    let maxCapacity = Number(array.shift());
    for (let line of array) {
        let [param1, param2] = line.split(" ");
        if (param1 === "Add") {
            train.push(param2);
        } else {
            for (let i = 0; i < train.length; i++) {
                if (train[i] + Number(param1) <= maxCapacity) {
                    train[i] += Number(param1);
                    break;
                }
            }
        }
    }
    console.log(train.join(" "));
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
);
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
);
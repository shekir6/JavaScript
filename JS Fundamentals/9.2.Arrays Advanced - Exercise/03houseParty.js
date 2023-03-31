function houseParty(array) {
    let guests = [];
    for (let line of array) {
        let guest = line.split(" ")[0];
        line.includes("not")
            ? guests.includes(guest) ? guests.splice(guests.indexOf(guest), 1) : console.log(`${guest} is not in the list!`)
            : guests.includes(guest) ? console.log(`${guest} is already in the list!`) : guests.push(guest);
    }
    console.log(guests.join("\n"));
}
houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
);
console.log('---------------------');
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
);

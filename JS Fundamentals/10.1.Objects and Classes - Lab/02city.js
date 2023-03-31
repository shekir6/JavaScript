function city(obj) {
    for (let key of Object.keys(obj)) {
        console.log(`${key} -> ${obj[key]}`);
    }
} 
// !!! alternative solution !!!
function city(city){
    let entries = Object.entries(city);
    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`);
        
    }       
}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);

function requiredReading(pages, pagesAHour, days) {
    let hours = pages / pagesAHour
    let totalTime = hours / days
    console.log(totalTime);
}
requiredReading(212,
    20,
    2);
console.log('-------------------------');
requiredReading(432,
    15,
    4
); 
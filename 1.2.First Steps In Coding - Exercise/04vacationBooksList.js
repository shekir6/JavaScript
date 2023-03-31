function booksRead(input) {

    let pages = (input[0]);
    let time = (input[1]);
    let days = (input[2]);

    let timeForRead = pages / time;
    let hoursOfDay = timeForRead / days;
    console.log(hoursOfDay);
    
}
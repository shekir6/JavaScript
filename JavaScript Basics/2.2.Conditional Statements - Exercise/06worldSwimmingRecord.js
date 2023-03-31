function worldSwimmingRecord(input) {
    let recordSec = Number(input[0]);
    let meters = Number(input[1]);
    let timeSecForMeter = Number(input[2]);

    let swamDistance = meters * timeSecForMeter;
    let addedTime = Math.floor(meters / 15) * 12.5;
    let totalTime = swamDistance + addedTime;
    let notEnoughTime = totalTime - recordSec;

    if (totalTime >= recordSec) {
        console.log(
            `No, he failed! He was ${notEnoughTime.toFixed(2)} seconds slower.`);
    } else if (recordSec > totalTime) {
        console.log(
            `Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }
}
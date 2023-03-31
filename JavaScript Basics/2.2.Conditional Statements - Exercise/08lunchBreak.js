function lunchBreak(input) {
    let serialName = input[0];
    let episodeDuration = Number(input[1]);
    let durationOfTheBreak = Number(input[2]);

    let timeForLunch = (durationOfTheBreak / 8);
    let timeToRelax = (durationOfTheBreak / 4);
    let RemainingTime = durationOfTheBreak - timeForLunch - timeToRelax;

    if (RemainingTime >= episodeDuration) {
        console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(RemainingTime - episodeDuration)} minutes free time.`);
    } else if (RemainingTime < episodeDuration) {
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(episodeDuration - RemainingTime)} more minutes.`);
    }
}
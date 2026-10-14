function getEventWeekday(numberOfDays) {

    const weekdays = [
        "Sonday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const today = new Date();
    const todayWeekday = today.getDay();
    const eventWeekday = (todayWeekday + numberOfDays) % 7;
    
    return weekdays[eventWeekday];

}

console.log(getEventWeekday(0));
console.log(getEventWeekday(5));
console.log(getEventWeekday(15));
console.log(getEventWeekday(6));
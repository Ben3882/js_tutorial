function dayName (date) {
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfTheWeek[date.getDay()];
}
function greeting(date) {
    return `Hello, World! Happy ${dayName(date)}`
}
/*let now = new Date();
let dayName = daysOfTheWeek[now.getDay()];
console.log(dayName);
*/

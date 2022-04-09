/*
- Write a javacript function to get current data 
- Write a javascript function to compare dates 
- Write a javascript function to test whether a date is a weekend (IsIsraeliWeekend)
- Write a function which returns the nubmer of days between two dates.
*/

const getCurrentDate = function () {
    return new Date();
}

console.log(getCurrentDate());

const compareDates = function (date1, date2) {
    return date1.getTime() - date2.getTime();
}

console.log(compareDates(new Date(2022, 3, 23), new Date(23, 03, 2)));

const isIsraeliWeekend = function (date) {
    const tmpDate=new Date(date);
    console.log(tmpDate.getDay());
    return tmpDate.getDay() == 5 || tmpDate.getDay() == 6;
}

console.log(isIsraeliWeekend('2022-3-17'));

const daysBetweenDates = function (date1, date2) {
    return Math.abs(date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24);
}

console.log(daysBetweenDates(new Date(2022, 3, 23), new Date(2022, 3, 2)));
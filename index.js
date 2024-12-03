// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
}
const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return (num) => num * multiplier;
  }

 const fareDoubler = (y) => {
    return y*2
 }
 const fareTripler = (b) => {
    return b*3
 }
 
 const selectDifferentDrivers = (drivers, func) => {
    return func(drivers); 
  };
  









"use strict";
const add = (a, b) => {
    return a + b;
};
const subtract = (a, b) => {
    return a - b;
};
function divide(a, b) {
    return a / b;
}
const multiply = function (a, b) {
    return a * b;
};
const logger = (message) => {
    console.log(message);
};
const throwError = (message) => {
    throw new Error(message);
};
const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};
const logWeather = (forecast) => {
    console.log(forecast.date);
    console.log(forecast.weather);
};
// IF DESTRUCTURING
const logWeather2 = ({ date, weather }) => {
    console.log(date);
    console.log(weather);
};
logWeather(todaysWeather);
//# sourceMappingURL=functions.js.map
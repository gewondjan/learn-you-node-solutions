/* eslint-disable */
var tempArray = process.argv;

tempArray = tempArray.slice(2);

var sum = tempArray.reduce(function (accumulator, current) {
    return +accumulator + +current;
}, 0);

console.log(sum);
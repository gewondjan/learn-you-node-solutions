/* eslint-disable */



var getFilteredList = require('./6module');

getFilteredList(process.argv[2], process.argv[3], function callback(err, filteredList) {
    if (err) {
        console.log("Error: ", err);
        return;
    }
    filteredList.forEach(function (item) {
        console.log(item);
    });
});
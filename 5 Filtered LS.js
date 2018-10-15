/* eslint-disable */

const path = require('path');
const fs = require('fs');

var pathName = process.argv[2];
var filter = process.argv[3];

var filteredList = [];

fs.readdir(pathName, function callback(err, fileList) {
    if (err) {
        console.log(err);
        return;
    }
    filteredList = fileList.reduce(function (newList, file) {
        if (path.extname(file) === ("." + filter)) {
            newList.push(file);
        }
        return newList;
    }, filteredList);
    filteredList.forEach(function (file) {
        console.log(file);
    });

});
/* eslint-disable */

const fs = require('fs');
const path = require('path');

module.exports = function (directory, filter, cb) {
    filter = '.' + filter;
    var filteredList = [];
    fs.readdir(directory, function callback(err, fileList) {
        if (err) {
            cb(err);
            return;
        }
        filteredList = fileList.reduce(function (newList, currentFile) {
            if (filter === path.extname(currentFile)) {
                newList.push(currentFile);
            }
            return newList;
        }, filteredList);

        cb(null, filteredList);

    });


}
/* eslint-disable */

var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function done(err, fileContents) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(fileContents.split('\n').length - 1);
});
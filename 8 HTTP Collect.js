/* eslint-disable */

const http = require('http');

http.get(process.argv[2], function (res) {
    var completeString = '';
    res.on('data', function (data) {
        completeString = completeString + data.toString();
    });
    res.on('end', () => {
        console.log(completeString.length);
        console.log(completeString);
    });

    res.on('error', console.error);

});
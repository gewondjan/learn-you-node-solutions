/* eslint-disable */

const http = require('http');

var urls = process.argv.slice(2);
var responseArray = [];
var count = 0;

var packageArray = urls.reduce(function (newArray, url) {
    newArray.push({
        url: url,
        order: count++,
        ready: false,
        body: ''

    });
    return newArray;
}, []);



// console.log(packageArray);

// function printToConsole() {
//     var ready = true;
//     packageArray.forEach(function (package) {
//         if (package.ready === false) {
//             ready = false;
//         }
//     });

//     if (ready === true) {
//         packageArray.sort(function (response1, response2) {
//             return response1.order - response2.order;
//         });
//         packageArray.forEach(function (package) {
//             console.log(package.body);
//         });
//     }

// }

function uploadResults(url, body) {
    var index = packageArray.findIndex(function (arrayItem) {
        return arrayItem.url == url;
    });

    packageArray[index].body = body;
    packageArray[index].ready = true;
    var readyToPrint = true;

    packageArray.forEach((package) => {
        if (package.ready === false) {
            readyToPrint = false;
        }
    });

    if (readyToPrint) {
        packageArray.forEach((package) => {
            console.log(package.body);
        });
    }

}

// packageArray.forEach(function (package) {

urls.forEach(function (url) {
    http.get(url, function (res) {
        res.setEncoding('utf8');
        var body = '';
        res.on('data', function (data) {
            body += data;
        });

        res.on('end', () => uploadResults(url, body));
        res.on('error', console.error);

    });
});
// });
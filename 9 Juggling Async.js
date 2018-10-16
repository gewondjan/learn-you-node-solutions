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
    packageArray.findIndex(

        //Need to find the index of the array at the given url, then use that index to modify the 
        //body and the ready status.  Once those have been modified, the forEach methods should work appropriately.


        [url].body = body; packageArray[url].ready = true; console.log("we are alive"); console.log(packageArray);
        var readyToPrint = true;

        packageArray.forEach((package) => {
            console.log("we are in");
            console.log(package.ready);
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
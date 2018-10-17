/* eslint-disable */

const http = require('http');
const urlMod = require('url');


var server = http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    var urlObject = urlMod.parse(req.url, true);

    var jsonString = '';

    if (urlObject.pathname === '/api/parsetime') {
        //take the query and make a time object
        var newDate = new Date(urlObject.query.iso);

        var timeObject = {
            hour: newDate.getHours(),
            minute: newDate.getMinutes(),
            second: newDate.getSeconds()
        };

        //Stringify the object and put it in the json String
        jsonString = JSON.stringify(timeObject);
    }

    if (urlObject.pathname === '/api/unixtime') {
        var newDate = new Date(urlObject.query.iso);

        var timeObject = {
            unixtime: newDate.getTime()
        };
        jsonString = JSON.stringify(timeObject);
    }

    res.write(jsonString);
    res.end();

});

server.listen(process.argv[2]);
/* eslint-disable */

const http = require('http');
const fs = require('fs');

var buffer = fs.createReadStream(process.argv[3]);

var server = http.createServer(function (request, response) {
    response.writeHead(200, {
        'content-type': 'text/plain'
    });
    buffer.pipe(response);
});

server.listen(process.argv[2]);
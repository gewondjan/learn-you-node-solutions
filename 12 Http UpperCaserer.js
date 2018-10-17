/* eslint-disable */

const http = require('http');
const map = require('through2-map');

var server = http.createServer(function (request, response) {
    if (request.method !== 'POST') {
        return response.end('We need a post');
    }

    request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(response);
});

server.listen(process.argv[2]);
/* eslint-disable */

const net = require('net');
var myDate = new Date();


function addZero(number) {
    if (number < 10) {
        return '' + 0 + number;
    }
    return '' + number;
}

var server = net.createServer(function (socket) {
    var myDate = new Date();
    socket.write(myDate.getFullYear() + '-' + addZero(myDate.getMonth() + 1) + '-' + addZero(myDate.getDate()) + ' ' + addZero(myDate.getHours()) + ':' + addZero(myDate.getMinutes() + '\n'));
    socket.end();
});
server.listen(process.argv[2]);
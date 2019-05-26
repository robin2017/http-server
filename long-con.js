var os = require('os');
var http = require('http');
const PORT = "1235";

var server = http.createServer(function (req, res) {
    console.log("请求URL："+req.url);
    if(req.url==='/favicon.ico'){
        res.end('no icon');
        return;
    }
    console.log('客户端的地址：' + req.connection.remoteAddress
        + '/客户端的端口：' + req.connection.remotePort);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');

}).listen(PORT);
server.setTimeout(0);   //设置不超时，所以服务端不会主动关闭连接

console.log('start ' + os.hostname() + ':'+PORT);
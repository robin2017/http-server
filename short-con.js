var os = require('os');
var http = require('http');
const PORT = "1234";

http.createServer(function(req, res) {
    console.log('客户端的地址：'+req.connection.remoteAddress
        + '/客户端的端口：' + req.connection.remotePort);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
    res.destroy();  // 服务端关闭连接，发送fin标示
}).listen(PORT);

console.log('start ' + os.hostname() + ':'+PORT);
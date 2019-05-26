const WebSocketServer = require('ws').Server,
    webSocketServer = new WebSocketServer({port:12800});
//lsof -i:12800
var connectNum = 0;
webSocketServer.on('connection',function (ws) {
    ++connectNum;
    console.log('connection num is:',connectNum);
    ws.on('message',function (message) {
        console.log('接收并发送：',message);
        ws.send(message)
    })
    ws.on('close',function () {
        connectNum--;
    })
});
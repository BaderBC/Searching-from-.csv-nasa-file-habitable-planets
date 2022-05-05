let http = require('http'),
    dt = require('./mainModule')

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('My actual time: '+ dt.myDataTime()+'P.S. DZIALA XDDDD!');
    res.end();
}).listen(8080);
let http = require('http'),
    url = require('url'),
    fs = require('fs');

http.createServer(function (req, res){
    fs.readFile()
    res.writeHead(200, {'Content-Type': 'text/html'});
    let q = url.parse(req.url, true).query
    res.write(`${q.day} ${q.month} ${q.year}`);
    res.end();
}).listen(8080);
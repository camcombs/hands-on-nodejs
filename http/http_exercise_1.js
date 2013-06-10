// http exercise 1
// write the contents of a file
//path: hands-on_nodejs_exercises/http/sample.txt
    var fs = require('fs'),
    path = require('path');

require('http').createServer(function(req,res) {
    var file = path.normalize(req.url);
    console.log('File: ' + file);
    path.exists(file, function(exists) {
        if (exists) {
            fs.stat(file, function(err,stat) {
                var rs;
                if (err) { throw err;}
                if (stat.isDirectory()) {
                    res.writeHead(403);
                    res.end('Forbidden');
                } else {
                    rs = fs.createReadStream(file);
                    res.writeHead(200);
                    rs.pipe(res);
                }
                
            });
        } else {
            res.writeHead(404);
            res.end('Not Found');
        }
        })
   }).listen(process.env.PORT);
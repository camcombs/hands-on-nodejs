// http_client_2.js

var options = {
        host:"www.google.com",
        port: 80,
        path: '/index.html'
};

var req = require('http').request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS:' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
        console.log('BODY: ' + chunk);        
    });
});

// WRITE data to request body
req.write("data\n");
req.write("data\n");
req.end();

var fs = require("fs");

fs.stat(__dirname + '/a.txt',function(err, stats) {
    if (err) {throw err;}
    console.log(stats.size);
})

fs.open(__dirname + '/a.txt','r', function(err, fd) {
    if (err) { throw err;}
    
        var buffer = Buffer(5);
        var readBytes = 0;
        (function readIt() {            
            fs.read(fd, buffer, readBytes, buffer.length - readBytes, 10 + readBytes, 
                function(err, bytesRead) {
                if (err) { throw err;}
                readBytes += bytesRead;
                
                if (readBytes === buffer.length) {
                    console.log('Exercise 2: ' + buffer);  // writes out the hex values
                } else {
                    readIt();
                }
            });       
        })();        

    });
    
    fs.open(__dirname + '/a.txt','r', function(err, fd) {
    if (err) { throw err;}
        
        function readSome(startingAt, byteCount, callback) {
            var buffer = Buffer(byteCount);
            var readBytes = 0;   
         
            (function readIt() {            
                fs.read(fd, buffer, readBytes, buffer.length - readBytes, startingAt + readBytes, 
                    function(err, bytesRead) {
                    if (err) { throw err;}
                    readBytes += bytesRead;
                    
                    if (readBytes === buffer.length) {
                        console.log('Exercise 3: ' + buffer);  // writes out the hex values, unless you append a string
                    } else {                                    // then it writes out alphanumeric
                        readIt();
                    }
                });       
            })();     
            }
            
            readSome(5,5, function(buffer1) {
                console.log(buffer1);
            });
            
            readSome(10,5, function(buffer2) {
               console.log(buffer2) ;
            });
    });
    
    // exercise 4
    
    // fs.open(__dirname + '/b.txt','w', function(err, fd) {
    //     var writeBuffer = new Buffer('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
    //     //bufferOffset = 0, bufferLength = writeBuffer.length, filePosition = null;
    //     var written = 0;
    //     
    //     (function writeIt() {
    //         fs.write(fd,writeBuffer,0 + written, writeBuffer.length - written, 0 + written,
    //             function(err,bytesWritten) {
    //                if (err)  { throw err; }
    //                 written += bytesWritten;
    //                 if (written === writeBuffer.length) {
    //                     console.log('exercise 4 done');
    //                 } else {
    //                     writeIt();
    //                 }
    //                 
    //             }
    //         )
    //     })();
    // });
    
    // exercise 5
    //     fs.open(__dirname + '/b.txt','a', function(err, fd) {
    //     var writeBuffer = new Buffer('*abc');
    //     var written = 0;
    //     
    //     (function writeIt() {
    //         fs.write(fd,writeBuffer,0 + written, writeBuffer.length - written, 0 + written,
    //             function(err,bytesWritten) {
    //                if (err)  { throw err; }
    //                 written += bytesWritten;
    //                 if (written === writeBuffer.length) {
    //                     console.log('exercise 5 done');
    //                 } else {
    //                     writeIt();
    //                 }
    //                 
    //             }
    //         )
    //     })();
    // });
    
    // exercise 6
    
        fs.open(__dirname + '/b.txt','a', function(err, fd) {
        var writeBuffer = new Buffer('7');
        var written = 0;
        
        (function writeIt() {
            fs.write(fd,writeBuffer,0 + written, writeBuffer.length - written, 10,
                function(err,bytesWritten) {
                   if (err)  { throw err; }
                    written += bytesWritten;
                    if (written === writeBuffer.length) {
                        console.log('exercise 6 done: ' + writeBuffer);
                    } else {
                        writeIt();
                    }
                    
                }
            )
        })();
    }); 
    
    
    
    
    
    
    
    

var buffer = new Buffer(100);

for (x = 0; x < 100; x++) {
    buffer[x] = x;
    //console.log(x);
}

var slice = buffer.slice(40,60);

for (x = 0; x < 20; x++) {
    console.log(slice[x]);
    
}
    




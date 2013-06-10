var util = require("util"),
EventEmitter = require('events').EventEmitter;

var Ticker = function() {
    var self = this;
    setInterval(function() {
        self.emit('tick');
    },1000);
    setInterval(function() {
        self.emit('tock');
    },5000);
};

util.inherits(Ticker, EventEmitter);

var ticker = new Ticker();

ticker.on('tick', function() {
    console.log('TICK');
});

ticker.on('tock', function() {
    console.log('TOCKTOCK');
})



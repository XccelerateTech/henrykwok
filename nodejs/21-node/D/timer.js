const EventEmitter = require('events');

class Timer extends EventEmitter {
    constructor() {
        super();
    }
    
    countdown(seconds) {
        let timePassed = 0;
        const interval = setInterval(emitInterval, 1000);
        const x = this;

        function emitInterval () {
            var remaining = seconds - timePassed;
            if(remaining == 0) {
                clearInterval(interval);
            }
            x.emit('tick', remaining);
            timePassed += 1;
        }
    }    
    
}

module.exports = Timer;
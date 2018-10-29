let Timer = require('./timer');

const timer1 = new Timer();

timer1.on('tick',function(remaining){
    if(remaining == 0) {
        return console.log('kaboom');
    }
    console.log(`Time remaining is ${remaining}.`)
});

timer1.countdown(20);



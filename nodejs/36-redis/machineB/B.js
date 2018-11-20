const redis = require('redis');

let client = redis.createClient({
    host:'localhost',
    port: 6379
});

client.auth('mypass1');

function setGetJobSchedule (){
    setTimeout(getJob, 3000);
}

function getJob(){
    client.rpop('messagequeue', (err, reply) => {
        if(err) {
            console.log(err);
            setGetJobSchedule();
            return;
        } 
        if(reply === null) {
            console.log('No Jobs here');
            setGetJobSchedule();
            return
        }

        const job = JSON.parse(reply);
        console.log(job);

    });
};

setGetJobSchedule();




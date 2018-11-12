let pg = require('pg');

let config = {
    user: 'postgres',
    database: 'fruit1',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
}

let client = new pg.Client(config);

client.connect();

client.query("SELECT name FROM citrus WHERE color = 'orange'", function(err, results) {
    if(err) {
        console.log(err);
    }
    console.log(results.rows);
});

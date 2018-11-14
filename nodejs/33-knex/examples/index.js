const knex = require('knex') ({
    client: 'pg',
    connection: {
        database: "fruit1",
        user: "postgres",
        passowrd: "postgres"
    }
});

let query = knex.select("*").from("citrus");

query.then((rows) => {
    console.log(rows)
}).catch((error) => {
    console.log(error);
});
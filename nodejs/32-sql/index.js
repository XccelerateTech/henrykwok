const pg = require('pg');
const fs = require('fs');
const CSVReadableStream = require('csv-reader');

const config = {
    user: 'postgres',
    database: 'fruit1',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
}

const client = new pg.Client(config);
const inputStream = fs.createReadStream('transaction_record.csv', 'utf-8')

async function commands() {
    await client.connect();

    let rows = [];

    //interpret the csv file into an array
    inputStream.pipe(CSVReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
        .on('data', async (row) => {
            rows.push(row);
        })

        .on('end', async (data) => {
            await client.query('BEGIN');
            try {
                for (let row of rows) {
                    let [action, name, quantity] = row;
                    if(action === 'SELL') {
                        let result = await client.query(`SELECT quantity FROM stock INNER JOIN citrus on stock.citrus_id = citrus.id WHERE citrus.name =  $1 GROUP BY quantity;`, [name]);
                        if(result.rows[0].quantity < quantity) {
                            throw new Error (`Not enough for ${name}`);
                        }
                    }
                    if(action === 'BUY') {
                        await client.query(`UPDATE stock SET quantity = quantity + $1 from citrus WHERE stock.citrus_id = citrus.id AND name = $2`, [quantity, name]);
                        console.log(`You have bought ${quantity} ${name}s`);
                    } else {
                        await client.query(`UPDATE stock SET quantity = quantity - $1 FROM citrus WHERE stock.citrus_id = citrus.id AND name = $2`, [quantity, name]);
                        console.log(`You sold ${quantity} ${name}s`);
                    }
                }
                await client.query('COMMIT');
            } catch (e) {
                await client.query('ROLLBACK')
            }
        });
}

commands();



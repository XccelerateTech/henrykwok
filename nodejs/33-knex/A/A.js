const fs = require('fs');
const CSVReadableStream = require('csv-reader');

const knex = require('knex') ({
    client: 'postgresql',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'postgres',
        database: 'fruit1'
    }
});

const inputStream = fs.createReadStream('transaction_record.csv', 'utf-8')

async function commands () {
    let rows = [];
    inputStream.pipe(CSVReadableStream({parseNumbers: true, parseBooleans: true, trim: true }))
        .on('data', async(row) => {
            row.push(row);
        })

        .on('end', async (data) => {
            knex.transaction(async(trx)=>{
                for (let row of rows) {
                    let [action, name, quantity] = row;
                    if (action === 'SELL') {
                        let result = await trx.select('quantity').from ('stock')
                            .innerJoin('citrus', 'stock.citrus_id', 'citrus.id')
                            .where('citrus.name', name).groupBy('quantity');
                        if(rows[0].quantity < quantity) {
                            throw new Error ('Not enough inventories');
                        }
                    }

                    if(action === 'BUY') {
                        await trx ('stock')
                            .whereIn('citrus_id', function () {
                                return this.select('id')
                                    .from('citrus')
                                    .where('name', '=', name);
                            })
                            .increment('quantity', quantity);
                    } else {
                        await trx ('stock')
                            .whereIn('citrus_id', function () {
                                return this.select('id')
                                    .from('citrus')
                                    .where('name', '=', name);
                            })
                            .decrement('quantity', quantity);
                    }
                }

                let knexResult = await knex.select('*').from('stock').innerJoin('citrus', 'stock.citrus_id', 'citrus.id');
                console.log(knexResult);

                let trxResult = await trx.select('*').from('stock').innerJoin('citrus', 'stock.citrus_id', 'citrus.id');
                console.log(trxResult);
            })
        })
}

commands()

process.on('exit', function(code) {
    return console.log(`About to exit with code ${code}`)
})


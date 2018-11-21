const express = require('express');
const redis = require('redis');
const axios = require('axios');
const async = require('async');

const client = redis.createClient({
    host: 'localhost',
    port: 6379,
    auth_pass: 'mypass1'
});

const app = express();

//we get the reponse from blockchain API, we store each data sets into redis once we get info.
//we use the async package to allow us to form a queue (array) of our txIndexes we need to send the request.
const readLatestBlockQueue = async.queue(function(txIndexes, callback) {
    console.log('fetching details' + txIndexes);
    axios.get('https://blockchain.info/rawtx/' + txIndexes)
        .then((response) => {
            //Cache the data once we get the response, with 60 seconds expiry time
            client.setex('txIndexes1', 10*60, JSON.stringify(response.data), (err) => {
                if(err){
                    return console.log(err);
                }
                callback();
            });
        });
}, 4);    

//Code for getting the latest block from blockchain API, grab each txIndex and push it into readLatestBlock queue,
//so that the array is populated and we can grab the data for each transaction index.
function readLatestBlock () {
    console.log('checking the lastest block...');

    axios.get('https://blockchain.info/latestblock')
        .then((response) => {
            let data = response.data.txIndexes;
            data.forEach(txIndexes => {
                client.get('txIndexes', (err, reply) => {
                    if(err) {
                        return console.log(err);
                    } 
                    if(reply === null){
                        readLatestBlockQueue.push(txIndexes);
                    } else {
                        client.expire('txIndexes', 10*60, (err) => {
                            if(err){
                                return console.log(err);
                            }
                        });
                    }
                });
            })
            client.set('latestBlock', JSON.stringify(response.data), (err) => {
                if(err) {
                    return console.log(err);
                }
            });
        });
    setTimeout(readLatestBlock, 60 * 10000);
}

readLatestBlock();

//Use the promise to grab the data stored in redis before and show on the frontend 
app.get('/latestBlock', (req, res) => {
    client.get('latestBlock', (err, reply) => {
        const latestBlockReplied = JSON.parse(reply);
        Promise.all(
            latestBlock.txIndexes.map(txIndexes1 => {
                return new Promise ((resolve, reject) => {
                    client.get(txIndexes1, (err, reply) => {
                        const transaction = JSON.parse(reply);
                        if(transaction === null) {
                            return reject('Still fetching data...')
                        }
                        //Store data into each transaction.hash
                        resolve(transaction.hash);
                    });
                });
            })
        ).then ((hashes) => {
            //Stores the hashes grabbed through the latestBlock into the results returned from Promise
            latestBlockReplied.txHashes = hashes;
            console.log(hashes);
            //Parse the data into JSON format
            res.json(latestBlockReplied);
        }).catch(err =>{
            res.status(400).send(err);
        })
    });
});


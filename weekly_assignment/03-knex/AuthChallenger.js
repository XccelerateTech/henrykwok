const AuthChallenger = function (knex) {
    return async (username, password, cb) => {
        try {
            let query = await knex.select('user_name').from('user_table').where('user_name', username).where('password', password);
            return cb(null, (query.length === 1) ? true : false);
        } catch (err){
            return cb(err);
        }
    }
};

module.exports = AuthChallenger;


/* return function(username, password, cb){
    let query = knex.select('user_name')
    .from('user_table')
    .where('user_name', username)
    .where('password', password);

    query.then((rows) => {
        console.log(rows);
        if(rows.length == 1) {
            cb(null, true);
        } else {
            cb(null, false);
        }
    }).catch((err) => {
        console.log(err);
        cb(err);
    });
};
}; */
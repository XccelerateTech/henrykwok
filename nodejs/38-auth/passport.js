const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database: "authtest",
        user: "postgres",
        password: "postgres"
    }
});

module.exports = (app) => {
    //tell express using passport and express-session as auth middleware
    app.use(passport.initialize());
    app.use(passport.session());

    //tell passport we are using local strategy 
    //check the email and password whether it is same as the one in database
    passport.use('local-login', new LocalStrategy(
        async (email, password, done) => {
            try {
                let users = await knex('user_info').where({email:email});
                if (users.length == 0){
                    return done(null, false, { message: 'Incorrect credentials.'});
                }
                let user = users[0];
                if (user.password === password) {
                    return done (null, user);
                } else {
                    return done (null, false, {message: 'Incorrect credentials'});
                }
            } catch(err){
                return done(err);
            }
        }
    ));

    //passport.js native implementations that make use of the express-session to keep track of users
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async(id, done) => {
        let users = await knex('user_info').where({id:id});
        if(users.length == 0) {
            return done(new Error(`Wrong user id ${id}`));
        }
        let user = users[0];
        return done(null, user);
    });
};
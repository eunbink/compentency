require('dotenv').config();
const express = require('express')
    , session = require('express-session')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , cors = require('cors')
    , controller = require("./controllers/controller.js");

const app =  express();

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTION_STRING).then( db => {
    app.set( 'db', db );
})

passport.use(new Auth0Strategy({         //passing in object. details important.
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
}, function(accessToken, refreshToken, extraParams, profile, done) {   //important params! need to be exact.

    done(null, profile);
}));
//---------auth0 endpoints------------//

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/browse',
    failureRedirect: '/auth'
}));
app.get('/auth/me', (req, res) => {
    if(!req.user){
        return res.status(404).send('User Not Found')
    } 
    return res.status(200).send(req.user);
})

app.get('/auth/logout', ( req, res ) => {
    req.logOut();
    res.redirect(302, 'http://localhost:3000/#/')
})

//------------------------ENDPOINTS------------------------------//
app.get('/api/get_book', controller.get_book);
app.post('/api/add_book', controller.add_book);
app.put('/api/edit_book', controller.edit_book);


passport.serializeUser( (user, done) => {  
    done(null, user);
})
passport.deserializeUser( (user, done) => {
    done(null, user);
})


const PORT = 3005
app.listen(PORT, () => console.log(`Server on port ${PORT}`))
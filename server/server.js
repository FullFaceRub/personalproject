const express = require('express');
const bodyParser = require('body-parser');
const app = new express();
const port = 1337;
require('dotenv').config();
const controller = require('./controllers/bwcontroller');
const cors = require('cors');
const massive = require('massive');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const session = require('express-session');

app.use(cors());
app.use(bodyParser.json());

app.use(session({
    secret: 'notthedroidsyourelookingfor',
    resave: false,
    saveUnitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());

passport.use(new Auth0Strategy({
    domain: process.env.DOMAIN,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK,
    scope: 'openid profile'
}, function(accessToken, refreshToken, extraParams, profile, done){
    done(null,profile);
}))

passport.serializeUser((profile,done)=>{
    done(null,profile)
})

passport.deserializeUser((profile,done)=>{
    done(null,profile)
})

app.get('/auth', passport.authenticate('auth0'));
// app.get('/auth/callback', passport.authenticate('auth0'),{
//     successRedirect: `http://localhost:3000/`,
//     failureRedirect: '/login',
// })
app.get('/api/products/:category', controller.getCategory);
app.get('/api/product/:productid', controller.getProduct);
// app.get('/api/product/:productname', controller.searchProduct)


//***************************************************************************/
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db',db);
    app.listen(port, ()=>{
        console.log(`That's no moon! It's a port ${port}`)
    })
})
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = new express();
const port = 8080;
const controller = require('./controllers/bwcontroller');
const cors = require('cors');
const massive = require('massive');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const session = require('express-session');

app.use(cors());
app.use(bodyParser.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUnitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTION_STRING).then((db)=>{
    app.set('db',db);
})
passport.use(new Auth0Strategy({
    domain: process.env.DOMAIN,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK,
    scope: 'openid profile'
}, function(accessToken, refreshToken, extraParams, profile, done){
    let {displayName, picture, user_id} = profile; //deconstruct items from profile object
    const db = app.get('db'); //connect database

    db.readcustomer([user_id]).then(function (customers){
        if (!customers[0]){
            db.addcustomer([displayName, user_id])
            .then(customers => {
                return done(null, customers[0].customer_id)
            })
        } else {
            return done(null, customers[0].customer_id)
        }
    })
}))

passport.serializeUser((id,done)=>{
    return done(null,id)
})

passport.deserializeUser((id,done)=>{
    const db = app.get('db')//connect database
    db.readsessioncustomer([id])
    .then(function(user){
        return done(null,user[0])
    })
})

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0',{
    successRedirect: `http://localhost:3000/`,
    failureRedirect: 'http://localhost:3000/',
}))
app.get('/auth/me', (req,res)=>{
    console.log(req.user);
    if(!req.user){
        res.status(404).send('User not found.');
    } else {
        res.status(200).send(req.user);
    }
})
app.get('/auth/logout', function(req,res){
    req.logOut();
    res.redirect('http://localhost:3000/')
})
app.get('/api/products/:category', controller.getCategory);
app.get('/api/product/:productid', controller.getProduct);
app.get('/api/product/:productname', controller.searchProduct)


//***************************************************************************/
app.listen(port, ()=>{
        console.log(`That's no moon! It's a port ${port}`)
    })

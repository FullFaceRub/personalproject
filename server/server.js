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
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const noredirect = require('./middleware/NoRedirect');
const paymentcontroller = require('./controllers/paymentcontroller');

app.use(express.static(`${__dirname}/../build`));
app.use(cors());
app.use(bodyParser.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTION_STRING).then((db) => {
    app.set('db', db);
})
passport.use(new Auth0Strategy({
    domain: process.env.DOMAIN,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK,
    scope: 'openid profile'
}, function (accessToken, refreshToken, extraParams, profile, done) {

    let { displayName, picture, user_id } = profile; //deconstruct items from profile object
    const db = app.get('db'); //connect database

    db.readcustomer([user_id]).then(function (customers) {
        if (!customers[0]) {
            db.addcustomer([displayName, user_id])
                .then(customer => {
                    return done(null, customer[0].customer_id)
                })
        } else {
            return done(null, customers[0].customer_id)
        }
    })
}))

passport.serializeUser((id, done) => {
    return done(null, id)
})

passport.deserializeUser((id, done) => {
    const db = app.get('db')//connect database
    db.readsessioncustomer([id])
        .then(function (user) {
            return done(null, user[0])
        })
})
//Auth endpoints
app.get('/auth', noredirect.NoRedirect, passport.authenticate('auth0'));
app.get('/auth/callback', noredirect.authenticate);
app.get('/auth/me', (req, res) => {
    if (!req.user) {
        res.status(200).send('User not found.');
    } else {
        res.status(200).send(req.user);
    }
})
app.get('/auth/logout', function (req, res) {
    req.logOut();
    res.redirect('/')
})
//Payment endpoint
app.post('/api/payment', paymentcontroller.payment);// This endpoint also creates an invoice on the invoices table
//Endpoints
app.get('/api/products/:category', controller.getCategory);// This endpoint retrieves the data for CategoryView component
app.get('/api/product/:productid', controller.getProduct);// This endpoint retrieves the data for Product component
app.get('/api/products/search/:query', controller.searchProduct);// This endpoint retrieves the data for SearchResults component
app.post('/api/cart/:user/:productid/:quantity', controller.addToCart);// This endpoint adds a product and quantity to a customer's cart
app.get('/api/cart/:user', controller.getCart);// This endpoint retrieves the data for a particular customer's Cart component
app.get('/api/cartTotal/:user', controller.getCartTotal);// This endpoint uses a join to derive the Total cost of a customer's Cart and sends that to the Cart component
app.put('/api/cartquantity/:user/:productid/:quantity', controller.changeQuantity);// This endpoint serves both the Increment and Decrement functions in the Cart component
app.get('/api/inspiration', controller.getInspired);// This endpoint retrieves the data for the Inspiration component
app.delete('/api/deletecartitem/:user/:productid', controller.removeFromCart);// This endpoint removes an item from the Cart component if its quantity reaches 0
app.get('/api/orderhistory/:user', controller.getOrders);// This endpoint retrieves orderhistory of a customer based on their user id.
app.put(`/api/cart/:user/:product/:quantity`, controller.updateCart)

//***************************************************************************/
app.listen(port, () => {
    console.log(`That's no moon! It's a port ${port}`)
})

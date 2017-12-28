const express = require('express');
const bodyParser = require('body-parser');
const app = new express();
const port = 1337;
const controller = require('./controllers/bwcontroller');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();


app.use(cors());
app.use(bodyParser.json());

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
const express = require('express');
const bodyParser = require('body-parser');
const app = new express();
const port = process.env.PORT || 8080;
const controller = require('./bwcontroller');
const cors = require('cors');
const massive = require('massive');


app.use(cors());
app.use(bodyParser.json());


//***************************************************************************/
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db',db);
    app.listen(port, ()=>{
        console.log(`That's no moon! It's a port ${port}`)
    })
})
const express = require('express');
const bodyParser = require('body-parser');
const app = new express();
const port = 8080;
const controller = require('./bwcontroller');
const cors = require('cors');
const massive = require('massive');

const connectionString = 'postgres://zfgptxjpiheref:6c913a63bc33a10c77b2d4887a7691bb0e11c88e33b6f14a4814e93ae937e896@ec2-23-23-245-89.compute-1.amazonaws.com:5432/d2hpfhsgp36esh?ssl=true';

app.use(cors());
app.use(bodyParser.json());


//***************************************************************************/
massive(connectionString).then(db => {
    app.set('db',db);
    app.listen(port, ()=>{
        console.log(`That's no moon! It's a port ${port}`)
    })
})
require('dotenv').config()
const massive = require('massive'),
      express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      controller = require('./controller'),
      port = 4000;

const app = express()
app.use( bodyParser.json() )
app.use( cors() )
massive( process.env.CONNECTION_STRING).then( dbInstance => app.set('db', dbInstance), app.listen(port, () => console.log(`Look to my coming, at first light, on the fifth day. At dawn, look to port ${port}.`)))

app.get('/api/houses', controller.getHouses);
app.post('/api/houses', controller.createHouse);
app.delete('/api/houses/:id', controller.deleteHouse);

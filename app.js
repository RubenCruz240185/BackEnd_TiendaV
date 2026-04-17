const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const bodyParser = require('body-parser');

const http = require('http');
const { h } = require('vue');
const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res)=> res.status(200).send({
    message: 'welcome to my API from Tienda EmaNem',
}));
require('./routes/route_categoria')(app);
require('./routes/route_productos')(app);
require('./routes/route_carritos')(app);
require('./routes/route_carrito_detalle')(app);
require('./routes/route_usuario')(app);
require('./routes/route_login')(app);

const port = parseInt(process.env.PORT,10) || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
module.exports = app;
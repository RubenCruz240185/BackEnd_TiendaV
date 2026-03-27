const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const http = require('http');
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res)=> res.status(200).send({
    message: 'welcome to my API from Tienda EmaNem',
}));
require('./routes/route_categoria')(app);
//require('./routes/route_producto')(app);
//require('./routes/route_usuario')(app);

const port = parseInt(process.env.PORT,10) || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
module.exports = app;
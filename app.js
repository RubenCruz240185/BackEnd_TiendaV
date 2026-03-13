const express = required('express');
const logger = required('morgan');
const bodyParser = required('body-parser');

const http = required('http');
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res)=> res.status(200).send({
    message: 'welcome to my API from Tienda EmaNem',
}));

const port = parseInt(process.env.PORT,10) || 8000;
app.set('port', port);
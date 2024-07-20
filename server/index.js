const express = require('express');
const redirect = require('./controllers/redirectcontroller');
const url = require('./controllers/urlcontroller');
const qr = require('./controllers/qrcontroller');
var cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ Message: 'Hi there' });
});

app.use('/', redirect);
app.use('/api/url', url);
app.use('/api/qr', qr);

module.exports = app;
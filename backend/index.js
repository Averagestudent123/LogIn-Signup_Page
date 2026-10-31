const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
require('./Model/db');

const PORT = process.env.PORT || 3000;

const allowedOrigin = process.env.CLIENT_URL || 'http://localhost:5173';
app.use(cors({ origin: allowedOrigin, credentials: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Auth API is running');
});

app.use('/auth', require('./Routes/AuthRouter'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;

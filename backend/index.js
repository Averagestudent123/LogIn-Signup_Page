const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
require('./Model/db');

const PORT = process.env.PORT

app.get('/', (req,res) => {
    res.send('Hello');
})

app.use(cors());
app.use(bodyParser.json());
app.use('/auth', require('./Routes/AuthRouter'));
app.use('/products', require('./Routes/ProductRouter'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
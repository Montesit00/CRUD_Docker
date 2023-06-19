const express = require("express");
const cors = require('cors');
const morgan = require('morgan');

require('./src/connect/connect')
require('dotenv').config();

const app = express();

const port = process.env.PORT

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(require('./src/routes/routes'))

app.listen(port,()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`)
})
const express = require('express');

const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./db');

app.use('/', require('./routes'));

app.listen(3000, ()=>{
    console.log('Listening to http://localhost:3000');
});
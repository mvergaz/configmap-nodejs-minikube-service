require('dotenv').config()
const express = require('express');
const app = express(),
    port = 3000;

app.get('/', (req, res) => res.send(process.env));

app.listen(port, () => console.log(`Server listening on the port::${port}`));
const express = require('express');
const fetch = require('node-fetch');
const config = require('./config');
const app = express();

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`listen ${PORT}`)
})
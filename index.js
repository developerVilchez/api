const express = require('express');
const fetch = require('node-fetch');
const config = require('./config');
const app = express();

app.get('/competitions', (req, res) => {
  fetch(`${config.api.host}${config.api.resources}?access_token=${config.api.token}`)
    .then(res => res.json())
    .then(json => res.send(json))
    .catch(err => res.status(404).send(err))
})

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`listen ${PORT}`)
})
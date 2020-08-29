const express = require('express');
const fetch = require('node-fetch');
const { getDataFromJson } = require('./utils/utils');
const config = require('./utils/config');
const app = express();

//competitions endpoint
app.get('/competitions', (req, res) => {
  fetch(`${config.api.host}${config.api.resources}?access_token=${config.api.token}`)
    .then(res => res.json())
    .then(json => res.send(json))
    .catch(err => res.status(404).send(err))
});

//competition by id
app.get('/competitions/:id', (req, res) => {
  fetch(`${config.api.host}${config.api.resources}?access_token=${config.api.token}`)
  .then(res => res.json())
  .then(json => json["competitions"].find(obj => obj["id"] === parseInt(req.params.id)))
  .then(competition => res.send(competition))
  .catch(err => res.status(404).send(err["message"]) )
});

//teams endpoint
app.get('/teams', (req, res) => {
  getDataFromJson('./data/teams.json', 'utf-8')
    .then(data => res.send(JSON.parse(data.toString())["teams"]))
    .catch(err => res.send({ path : `${err.path}`, msg:'revisa la url de la data'}))
})

module.exports = app;


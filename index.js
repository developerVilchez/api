const express = require('express');
const fetch = require('node-fetch');
const { getDataFromJson } = require('./utils/utils');
const config = require('./utils/config');
const app = express();

app.get('/competitions', (req, res) => {
  fetch(`${config.api.host}${config.api.resources}?access_token=${config.api.token}`)
    .then(res => res.json())
    .then(json => res.send(json))
    .catch(err => res.status(404).send(err))
});


app.get('/competitions/:id', (req, res) => {
  fetch(`${config.api.host}${config.api.resources}?access_token=${config.api.token}`)
  .then(res => res.json())
  .then(json => json["competitions"].find(obj => obj["id"] === parseInt(req.params.id)))
  .then(competition => res.send(competition))
  .catch(err => res.status(404).send(err["message"]) )
});


app.get('/teams', (req, res) => {
  getDataFromJson('./data/teams.json', 'utf-8')
    .then(data => res.send(JSON.parse(data.toString())))
    .catch(err => res.send({ path : `${err.path}`, msg:'revisa la url de la data'}))
})

app.get('/teams/:id', (req, res) => {
  getDataFromJson('./data/teams.json', 'utf-8')
    .then(data => JSON.parse(data.toString()))
    .then(json => json["teams"])
    .then(arr => arr.find(obj => obj["id"] === parseInt(req.params.id)))
    .then(data => data !== "undefined" ? res.send(data) : null)
    .catch(err => console.error(err))
    
})

module.exports = app;


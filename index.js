const express = require('express');
const fetch = require('node-fetch');
const { getDataFromJson } = require('./utils/utils');
const config = require('./utils/config');
const app = express();
const  competitionsRouter = require('./router/competitions');
const competitionsJsonRouter = require('./router/competitions-json');
const teamsJsonRouter = require('./router/teams-json');

app.use('/competitions', competitionsRouter);

//get for json
app.use('/competitions-json', competitionsJsonRouter);
app.use('/teams.json', teamsJsonRouter);

app.get('/teams', (req, res) => {
  getDataFromJson('./data/teams.json', 'utf-8')
    .then(data => res.send(JSON.parse(data.toString())))
    .catch(err => res.send({ path : `${err.path}`, msg:'revisa la url de la data'}))
});

app.get('/teams/:id', (req, res) => {
  getDataFromJson('./data/teams.json', 'utf-8')
    .then(data => JSON.parse(data.toString()))
    .then(json => json["teams"])
    .then(arr => arr.find(obj => obj["id"] === parseInt(req.params.id)))
    .then(data => data !== "undefined" ? res.send(data) : null)
    .catch(err => console.error(err))
  });

  

module.exports = app;


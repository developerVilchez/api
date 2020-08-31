const express = require('express');
const app = express();

const competitionsRouter = require('./router/competitions');
const competitionsJsonRouter = require('./router/competitions-json');
const teamsJsonRouter = require('./router/teams-json');
const playersJsonRouter = require('./router/players-json');

//use api 
app.use('/competitions', competitionsRouter);

//use json endpoint
app.use('/competitions-json', competitionsJsonRouter);
app.use('/teams-json', teamsJsonRouter);
app.use('/players-json', playersJsonRouter);


  

module.exports = app;


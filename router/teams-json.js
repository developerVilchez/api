const express = require('express');
const teamsJsonRouter = express.Router(); 
const { getDataFromJson, propertyOf, findIndex } = require('../utils/utils');

teamsJsonRouter.get('/', (req, res) => {
  getDataFromJson('data/teams.json', 'utf-8')
  .then(data => JSON.parse(data.toString()))
  .then(data => res.send(data))
  .catch(err => res.status(404).send( {path:`${err.path}`, msg:'not found-verify local json', code:'404'}))
});

teamsJsonRouter.get('/:id', (req, res) => {
  const value = req.params.id
  getDataFromJson('data/teams.json', 'utf-8')
  .then(data => JSON.parse(data.toString()))
  .then(data => propertyOf(data, 'teams'))
  .then(data => {
      const index = findIndex(data, value);
      index === -1 ? res.status(404).send('invalid id') : res.send(data[index])
    })
  .catch(err => res.status(404).send( {path:`${err.path}`, msg:'not found-verify local json', code:'404'}))
  });

  module.exports = teamsJsonRouter;
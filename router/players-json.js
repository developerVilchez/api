const express = require('express');
const playersJsonRouter = express.Router();

const { getDataFromJson } = require('../utils/utils');


playersJsonRouter.get('/', (req, res) => {
  getDataFromJson('data/players.json', 'utf-8')
    .then(data => JSON.parse(data.toString()))
    .then(data => res.send(data))
    .catch(err => res.status(404).send( {path:`${err.path}`, msg:'not found-verify local json', code:'404'}))
})

module.exports = playersJsonRouter;
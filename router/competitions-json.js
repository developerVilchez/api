const express = require('express');
const competitionsJsonRouter = express.Router();

const { getDataFromJson, propertyOf, findIndex } = require('../utils/utils');


competitionsJsonRouter.get('/', (req, res) => {
  getDataFromJson('data/competitions.json', 'utf-8')
    .then(data => JSON.parse(data.toString()))
    .then(data => res.send(data))
    .catch(err => res.status(404).send( {path:`${err.path}`, msg:'not found/verify local json', code:'404'}))
})

competitionsJsonRouter.get('/:id', (req, res) => {    
  const value = req.params.id
  getDataFromJson('data/competitions.json', 'utf-8')
  .then(data => JSON.parse(data.toString()))
  .then(data => propertyOf(data, 'competitions'))
  .then(data => {
      const index = findIndex(data, value);
      index === -1 ? res.status(404).send('invalid id') : res.send(data[index])
    })
  .catch(err => res.status(404).send( {path:`${err.path}`, msg:'not found-verify local json', code:'404'}))
});



module.exports = competitionsJsonRouter;
const express = require('express');
const fetch = require('node-fetch');
const config = require('../utils/config');
const url = `${config.api.host}${config.api.resources}?access_token=${config.api.token}`;


const competitionsRouter = express.Router();

const checkStatus = (res) => {
  if(res.ok){
    return res
  } else {
    throw new Error(res.statusText)
  }
}

competitionsRouter.get('/', (req, res) => {
  fetch(url)
    .then(checkStatus)
    .then(res => res.json())
    .then(data => res.send(data))
    .catch(err => res.status(404).send( {path:`${err.path}`, msg:'not data found / use local json', code:'404'}))
})


competitionsRouter.get('/:id', (req, res) => {    
  const value = req.params.id
  fetch(url)
  .then(checkStatus)
  .then(res => res.json())
  .then(data => propertyOf(data, 'competitions'))
  .then(data => {
      const index = findIndex(data, value);
      index === -1 ? res.status(404).send('invalid id') : res.send(data[index])
    })
  .catch(err => res.status(404).send( {path:`${err.path}`, msg:'not found-verify local json', code:'404'}))
});

module.exports = competitionsRouter;
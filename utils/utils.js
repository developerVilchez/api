const fs = require('fs');

const  getDataFromJson = (fileName, type) => {
  return new Promise(function(resolve, reject){
    fs.readFile(fileName, type, (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
}


const propertyOf = (obj, prop) => obj[prop];

const findIndex = (arr, value) => {
  return arr.map((ele) => {
    if(ele.hasOwnProperty('id')){
      return ele.id
    }
  }).indexOf(Number(value))
}


module.exports = {
  getDataFromJson : getDataFromJson,
  propertyOf : propertyOf,
  findIndex : findIndex,
}
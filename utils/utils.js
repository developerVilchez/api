const fs = require('fs');

const  getDataFromJson = (fileName, type) => {
  return new Promise(function(resolve, reject){
    fs.readFile(fileName, type, (err, data) => {
        err ? reject(err) : resolve(data);
    });
  });
  }

module.exports = {
  getDataFromJson : getDataFromJson
}
var name = require('./name.json');
var uniqueRandomArray = require('unique-random-array');
module.exports ={
  all:name,
  random:uniqueRandomArray(name)
}
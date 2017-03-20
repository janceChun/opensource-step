var name = require('./name.json');
var uniqueRandomArray = require('unique-random-array');
var getRandomItem = uniqueRandomArray(name)
module.exports ={
  all:name,
  random: random
}
function random(number){
  if(number === undefined){
    return getRandomItem();
  }else{
    var randomTems=[];
    for(var i=0 ;i< number;i++){
      randomTems.push(getRandomItem());
    }
    return randomTems;
  }
}
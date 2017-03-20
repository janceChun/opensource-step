var expect = require('chai').expect;
var starWars = require('./index');

describe('demo',function(){
  describe('all',function(){
    it('should be an array of string',function(){
      expect(starWars.all).to.satisfy(isArrayOfStrings);
      function isArrayOfStrings(array){
        return array.every(function(item){
          return typeof item === 'string';
        })
      }
    });
    it('should contain `jance`', function () {
      expect(starWars.all).to.include('jance');
    })
  });
  describe('random',function(){
    it('should return a radom item', function () {
      var randoItem = starWars.random();
      expect(starWars.all).to.include(randoItem);
    });
    it('should  return an array of randoem items if passed  ', function () {
      var randomItems = starWars.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function (item) {
        expect(starWars.all).to.include(item);
      });
    });
  });
});

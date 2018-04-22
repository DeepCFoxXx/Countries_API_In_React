var assert = require('assert');
var position = require('./position.js');


describe('position', function() {

  it('should start at position 0,0', function() {
    assert.equal(0, position.y);
    assert.equal(0, position.x);
  });

  it('should have a move amount of ten', function() {
    assert.equal(10, position.moveAmount);
  });

  it('should move down by move amount', function() {
    position.moveDown();
    assert.equal(10, position.y);
  });

  it('should not be able to out of bounds', function() {
    position.moveLeft();
    assert.equal(0, position.x);
  });

});

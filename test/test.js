var chai = require('chai');
var expect = chai.expect;

before(function() {
});
  var x = 1;
  var y = 2;

describe('basic test', function() {

  it('should do simple arithmetic', function() {
    expect(x + y).to.equal(3);
  });
});
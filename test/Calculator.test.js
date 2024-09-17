const Calculator = require('../src/Calculator');
const assert = require('assert');

describe('testing add func', function(){
    it('test all', function(){
        Calculator.init();
        assert.equal(Calculator.add(100), 'SUCCESS');
        assert.equal(Calculator.add(200), 'SUCCESS');
        assert.equal(Calculator.sub(50), 'SUCCESS');
        assert.equal(Calculator.getCurrentValue(), 250);
        assert.equal(Calculator.getTimesUsed(), 3);
    });
});
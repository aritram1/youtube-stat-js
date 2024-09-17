const Calculator = require('../src/Calculator');
const assert = require('assert');

describe('testing add func', function(){
    it('test all', function(){
        Calculator.init();
        assert.equal(Calculator.add(45), 'SUCCESS');
        assert.equal(Calculator.add(8), 'SUCCESS');
        assert.equal(Calculator.sub(12), 'SUCCESS');
        assert.equal(Calculator._currentTotal, 41);
        assert.equal(Calculator._timesUsed, 3);
    });
});
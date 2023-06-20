const { processCsvLine, processFile } = require('../services/helperService');
const assert = require('assert');
const { expect } = require('chai');

describe('fileProcessor', function() {
  describe('#processCsvLine()', function() {
    it('should return null if there are less than 4 columns', function() {
      const result = processCsvLine('col1,col2,col3');
      assert.equal(result, null);
    });

    it('should return null if number is not a valid integer', function() {
      const line = 'col1,text,not_a_number,col4';
      const result = processCsvLine(line);
      expect(result).to.be.null;
    });

    it('should return an object when line is correctly formatted', function() {
      const result = processCsvLine('col1,text,2,FF00FF');
      assert.deepEqual(result, { text: 'text', number: 2, hex: 'FF00FF' });
    });
  });

});

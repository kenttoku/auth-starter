const { expect } = require('chai');
const { info } = require('../src/resolvers/query');

describe('Query', () => {
  describe('info', () => {
    it('should return the info', () => {
      const result = info();
      expect(result).to.equal('INFO');
    });
  });
});

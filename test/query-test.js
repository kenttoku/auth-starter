const { expect } = require('chai');
const { info } = require('../src/resolvers/query');

describe('Query', () => {
  const context = {
    isAuthorized: () => ({ user: { email: 'test@test.com' } }),
  };

  describe('info', () => {
    it('should return the info', async () => {
      const result = await info(null, null, context);
      expect(result).to.equal('INFO');
    });
  });
});

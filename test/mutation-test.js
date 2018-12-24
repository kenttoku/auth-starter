const { expect } = require('chai');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { signup, login } = require('../src/resolvers/mutation');
const { TEST_DATABASE_URL } = require('../src/config');
const { User } = require('../src/models');

describe('Mutation', () => {
  const _id = '333333333333333333333333';
  const email = 'Test@test.com';
  const lowercaseEmail = email.toLowerCase();
  const password = 'password123';

  before(async () => {
    await mongoose.connect(TEST_DATABASE_URL, { useNewUrlParser: true });
    await Promise.all([
      User.deleteMany(),
    ]);
  });

  beforeEach(async () => {
    const hashedPassword = await bcrypt.hash(password, 10);

    return User.create({
      _id,
      email,
      lowercaseEmail,
      password: hashedPassword,
    });
  });

  afterEach(() => User.deleteMany());

  after(() => mongoose.disconnect());

  describe('signup', () => {
    it('should return a string', async () => {
      const result = await signup(null, {
        email: 'test1@test.com',
        password: 'testpass',
      });

      expect(result).to.be.a('string');
    });
  });

  describe('login', () => {
    it('should return a string', async () => {
      const result = await login(null, {
        email,
        password,
      });

      expect(result).to.be.a('string');
    });
  });
});

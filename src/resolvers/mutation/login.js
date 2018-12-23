const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../../models');
const { JWT_SECRET } = require('../../config');

module.exports = async (root, args) => {
  const user = await User.findOne({ lowercaseEmail: args.email.toLowerCase() });
  if (!user) {
    throw new Error('Invalid credentials');
  }

  const isAllowed = await bcrypt.compare(args.password, user.password);
  if (!isAllowed) {
    throw new Error('Invalid credentials');
  }

  return jwt.sign({ user }, JWT_SECRET, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });
};

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../../models');
const { JWT_SECRET } = require('../../config');

module.exports = async (root, args) => {
  const { email, password } = args;
  const lowercaseEmail = email.toLowerCase();
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    email,
    lowercaseEmail,
    password: hashedPassword,
  };

  const user = await User.create(newUser);
  return jwt.sign({ user }, JWT_SECRET, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });
};

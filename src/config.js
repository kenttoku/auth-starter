require('dotenv').config();

exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/auth-starter';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/auth-starter-test';
exports.JWT_SECRET = process.env.JWT_SECRET || 'somesupersecret';

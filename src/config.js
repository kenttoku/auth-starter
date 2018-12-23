require('dotenv').config();

exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/auth-starter';
exports.JWT_SECRET = process.env.JWT_SECRET || 'somesupersecret';

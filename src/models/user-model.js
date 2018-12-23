const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  email: String,
  lowercaseEmail: { type: String, unique: true },
  password: String,
});

schema.set('toObject', {
  transform: (doc, result) => {
    delete result._id;
    delete result.__v;
    delete result.password;
    delete result.lowercaseEmail;
  },
});

schema.set('toJSON', {
  transform: (doc, result) => {
    delete result._id;
    delete result.__v;
    delete result.password;
    delete result.lowercaseEmail;
  },
});

module.exports = mongoose.model('User', schema);

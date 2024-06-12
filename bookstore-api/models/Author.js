const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: { type: String },
  birthdate: { type: Date },
  isSystemUser: { type: Boolean, default: false }
});

module.exports = mongoose.model('Author', authorSchema);

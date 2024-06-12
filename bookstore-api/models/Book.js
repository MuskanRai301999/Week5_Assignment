const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  bookCode: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  publishedYear: { type: Number, required: true },
  price: { type: Number, required: true },
  authors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Author' }],
  externalId: { type: String }
});

module.exports = mongoose.model('Book', bookSchema);

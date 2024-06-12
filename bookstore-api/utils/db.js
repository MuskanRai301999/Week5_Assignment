const mongoose = require('mongoose');

exports.connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/bookstore', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
};

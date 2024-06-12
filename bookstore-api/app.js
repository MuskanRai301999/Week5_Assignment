const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes');
const userRoutes = require('./routes/userRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const ratingRoutes = require('./routes/ratingRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const { connectDB } = require('./utils/db');

const app = express();

app.use(bodyParser.json());

app.use('/books', bookRoutes);
app.use('/authors', authorRoutes);
app.use('/users', userRoutes);
app.use('/reviews', reviewRoutes);
app.use('/ratings', ratingRoutes);
app.use('/payments', paymentRoutes);

const startServer = async () => {
  await connectDB();
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
};

startServer();

module.exports = app;

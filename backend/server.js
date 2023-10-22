const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const messageRoutes = require('./routes/message');
const customerRoutes = require('./routes/customer');
const agentRoutes = require('./routes/agent');
const responseRoutes = require('./routes/response');
const convoHistoryRoutes = require('./routes/convoHistory');
const errorHandler = require('./middleware/error');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

console.log('Connected to MongoDB');

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api', messageRoutes);
app.use('/api', customerRoutes);
app.use('/api', agentRoutes);
app.use('/api', responseRoutes);
app.use('/api', convoHistoryRoutes);

// error handler
app.use(errorHandler);

// start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
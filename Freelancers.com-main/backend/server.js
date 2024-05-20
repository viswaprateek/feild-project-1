const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const jobRoutes = require('./routes/jobRoutes');
const bidRoutes = require('./routes/bidRoutes'); // Import bid routes
const contractRoutes = require('./routes/contracts');
const messageRoutes = require('./routes/messagesRoutes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/user-api/auth', userRoutes);
app.use('/job', jobRoutes);
app.use('/bids', bidRoutes);
app.use('/contracts', contractRoutes);
app.use('/messages', messageRoutes);




module.exports = app;

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/handyvibe';

mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('Mongo connected'))
  .catch(err => console.error('Mongo connection error', err));

// routes
const authRoutes = require('./src/routes/auth');
const serviceRoutes = require('./src/routes/service');
const bookingRoutes = require('./src/routes/booking');

app.use('/api/auth', authRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/bookings', bookingRoutes);

app.get('/', (req,res)=> res.send('HandyVibe API running'));

app.listen(PORT, ()=> console.log(`Server running on ${PORT}`));

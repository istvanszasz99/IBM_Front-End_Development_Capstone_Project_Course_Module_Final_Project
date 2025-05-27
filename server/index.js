const express = require('express');
const cors = require('cors');
const connectToMongo = require('./db');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8181;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectToMongo();

// API Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/instant-consultation', require('./routes/instantConsultation'));
app.use('/api/booking-consultation', require('./routes/bookingConsultation'));

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, 'build')));

// Serve React app for any unknown route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

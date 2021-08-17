const express = require('express');
const cors = require('cors');
const app = express();
const vehiclesRoute = require('./routes/vehicles.route');

// Settings
app.set('port', process.env.port || 3000);

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1/vehicles', vehiclesRoute);

module.exports = app;

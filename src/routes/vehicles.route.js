const { Router } = require('express');
const vehiclesRoute = Router();
const vehiclesCtr = require('../controllers/vehicles.controller');

vehiclesRoute.get('/', vehiclesCtr.getAll);

module.exports = vehiclesRoute;

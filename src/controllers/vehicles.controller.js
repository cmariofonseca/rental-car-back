const vehiclesList = require('../data/vehicleList.json')

exports.getAll = (req, res) => {
  const vehicles = vehiclesList;
  res.json(vehicles);
}
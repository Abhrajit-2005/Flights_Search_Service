const express = require('express');
const CityController = require('../../controllers/city_controller');
const FlightController = require('../../controllers/flight_controller');
const router = express.Router();
router.post('/city', CityController.create);
router.post('/cities', CityController.createMany);
router.get('/city/:cityid', CityController.getCity);
router.get('/cities', CityController.getAllCities);
router.delete('/city/:cityid', CityController.destroy);
router.patch('/city/:cityid', CityController.update);
router.get('/city/:cityid/airports', CityController.getAirports);
router.post('/flights', FlightController.createFlight);
router.get('/flight/:flightid', FlightController.getFlight);
router.get('/flights', FlightController.getAllFlights);
module.exports = router;

/*
flight_no,
airplaneID,
departureAirportID,
arrivalAirportID,
arrivalTime,
departueTime,
price,
boardingGate,
totalSeats
*/
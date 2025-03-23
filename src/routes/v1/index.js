const express = require('express');
const CityController = require('../../controllers/city_controller');
const FlightController = require('../../controllers/flight_controller');
const AirportController = require('../../controllers/airport_controller');
const { FlightMiddlewares } = require('../../middlewares/index');
const router = express.Router();
router.post('/city', CityController.create);
router.post('/cities', CityController.createMany);
router.get('/city/:cityid', CityController.getCity);
router.get('/cities', CityController.getAllCities);
router.delete('/city/:cityid', CityController.destroy);
router.patch('/city/:cityid', CityController.update);
router.get('/city/:cityid/airports', CityController.getAirports);


router.post('/flights', FlightMiddlewares.validateCreateFlight, FlightController.createFlight);
router.get('/flight/:flightid', FlightController.getFlight);
router.get('/flights', FlightController.getAllFlights);


router.post('/airport', AirportController.create);
router.get('/airport/:airportid', AirportController.get);
router.get('/airports', AirportController.getAll);
router.delete('/airport/:airportid', AirportController.destroy);
router.patch('/airport/:airportid', AirportController.update);
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
const express = require('express');
const CityController = require('..//../controllers/city_controller');
const router = express.Router();
router.post('/city', CityController.create);
router.post('/cities', CityController.createMany);
router.get('/city/:cityid', CityController.getCity);
router.get('/cities', CityController.getAllCities);
router.delete('/city/:cityid', CityController.destroy);
router.patch('/city/:cityid', CityController.update);
router.get('/city/:cityid/airports', CityController.getAirports);

module.exports = router;
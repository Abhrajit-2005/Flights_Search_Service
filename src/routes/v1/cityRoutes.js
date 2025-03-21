const express = require('express');
const CityController = require('..//../controllers/city_controller');
const router = express.Router();
router.post('/city', CityController.create);
router.get('/city/:cityid', CityController.getCity);
router.delete('/city/:cityid', CityController.destroy);
router.patch('/city/:cityid', CityController.update);

module.exports = router;
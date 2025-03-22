const CityService = require('../services/city_service');
const cityService = new CityService();
const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "City created successfully",
            err: {}
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            message: "City creation failed",
            err: err
        });
    }
}

const createMany = async (req, res) => {
    try {
        const cities = await cityService.createManyCities(req.body);
        return res.status(201).json({
            data: cities,
            success: true,
            message: "Cities created successfully",
            err: {}
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Cities creation failed",
            err: err
        });
    }
}

const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.cityid);
        return res.status(200).json({
            data: response,
            success: true,
            message: "City deleted successfully",
            err: {}
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            message: "City deletion failed",
            err: err
        });
    }
}
const update = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.params.cityid, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "City updated successfully",
            err: {}
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            message: "City updation failed",
            err: err
        });
    }
}
const getCity = async (req, res) => {
    try {
        const city = await cityService.getCity(req.params.cityid);
        return res.status(200).json({
            data: city,
            success: true,
            message: "City fetched successfully",
            err: {}
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            message: "City fetch failed",
            err: err
        });
    }
}

const getAllCities = async (req, res) => {
    try {
        console.log(req.query);

        const cities = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data: cities,
            success: true,
            message: "Cities fetched successfully",
            err: {}
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Cities fetch failed",
            err: err
        });
    }
}

const getAirports = async (req, res) => {
    try {
        const city = await cityService.getCity(req.params.cityid);
        const airports = await city.getAirports();
        return res.status(200).json({
            data: airports,
            success: true,
            message: "Airports fetched successfully",
            err: {}
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Airports fetch failed",
            err: err
        });
    }
}

module.exports = {
    create,
    createMany,
    destroy,
    update,
    getCity,
    getAllCities,
    getAirports
};
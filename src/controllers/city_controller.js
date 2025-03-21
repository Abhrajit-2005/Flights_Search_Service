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

module.exports = {
    create,
    destroy,
    update,
    getCity
};
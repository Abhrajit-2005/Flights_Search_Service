const AirplaneService = require('../services/airplane_service');
const airplaneService = new AirplaneService();

const create = async (req, res) => {
    try {
        const airplane = await airplaneService.create(req.body);
        return res.status(201).json({
            data: airplane,
            success: true,
            message: "Airplane created successfully",
            err: {}
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Airplane creation failed",
            err: err
        });
    }
}
const get = async (req, res) => {
    try {
        const airplane = await airplaneService.get(req.params.airplaneid);
        return res.status(200).json({
            data: airplane,
            success: true,
            message: "Airplane fetched successfully",
            err: {}
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Airplane fetch failed",
            err: err
        });
    }
}

const getAll = async (req, res) => {
    try {
        const airplanes = await airplaneService.getAll();
        return res.status(200).json({
            data: airplanes,
            success: true,
            message: "Airplanes fetched successfully",
            err: {}
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Airplanes fetch failed",
            err: err
        });
    }
}

const destroy = async (req, res) => {
    try {
        const airplane = await airplaneService.destroy(req.params.airplaneid);
        return res.status(200).json({
            data: airplane,
            success: true,
            message: "Airplane deleted successfully",
            err: {}
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Airplane deletion failed",
            err: err
        });
    }
}

const update = async (req, res) => {
    try {
        const airplane = await airplaneService.update(req.params.airplaneid, req.body);
        return res.status(200).json({
            data: airplane,
            success: true,
            message: "Airplane updated successfully",
            err: {}
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Airplane update failed",
            err: err
        });
    }
}

module.exports = {
    create,
    get,
    getAll,
    destroy,
    update
}
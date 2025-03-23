const AirportService = require('../services/airport_service');
const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const airport = await airportService.create(req.body);
        return res.status(201).json({
            data: airport,
            success: true,
            message: "Airport created successfully",
            err: {}
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Airport creation failed",
            err: err
        });
    }
}

async function get(req, res) {
    try {
        const airport = await airportService.get(req.params.airportid);
        return res.status(200).json({
            data: airport,
            success: true,
            message: "Airport fetched successfully",
            err: {}
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Airport fetch failed",
            err: err
        });
    }
}

async function getAll(req, res) {
    try {
        const airports = await airportService.getAll();
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

async function update(req, res) {
    try {
        const airport = await airportService.update(req.params.airportid, req.body);
        return res.status(200).json({
            data: airport,
            success: true,
            message: "Airport updated successfully",
            err: {}
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Airport update failed",
            err: err
        });
    }
}

async function destroy(req, res) {
    try {
        const airport = await airportService.destroy(req.params.airportid);
        return res.status(200).json({
            data: airport,
            success: true,
            message: "Airport deleted successfully",
            err: {}
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Airport deletion failed",
            err: err
        });
    }
}

module.exports = {
    create,
    get,
    getAll,
    update,
    destroy
}
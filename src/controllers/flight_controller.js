const { FlightService } = require('../services/index');
const flightService = new FlightService();

async function createFlight(req, res) {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            message: "Flight created successfully",
            err: {}
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Flight creation failed",
            err: err
        });
    }
}
async function getFlight(req, res) {
    try {
        const flight = await flightService.getFlight(req.params.flightid);
        return res.status(200).json({
            data: flight,
            success: true,
            message: "Flight fetched successfully",
            err: {}
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Flight fetch failed",
            err: err
        });
    }
}
async function getAllFlights(req, res) {
    try {
        const flights = await flightService.getAllFlights(req.query);
        return res.status(200).json({
            data: flights,
            success: true,
            message: "Flights fetched successfully",
            err: {}
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Flights fetch failed",
            err: err
        });
    }
}

module.exports = {
    createFlight,
    getFlight,
    getAllFlights
};
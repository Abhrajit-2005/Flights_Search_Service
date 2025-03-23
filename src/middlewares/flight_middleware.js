const validateCreateFlight = (req, res, next) => {
    if (!req.body.flight_no ||
        !req.body.airplaneID ||
        !req.body.departureAirportID ||
        !req.body.arrivalAirportID ||
        !req.body.arrivalTime ||
        !req.body.departueTime ||
        !req.body.price) {
        return res.status(400).json({
            data: {},
            success: false,
            message: "Bad request. Please provide all required fields.",
            err: {}
        });
    }
    next();
}
module.exports = {
    validateCreateFlight
};
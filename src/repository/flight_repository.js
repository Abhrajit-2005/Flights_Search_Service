const { Flights } = require('../models/index');
const { Op } = require('sequelize');
class FlightRepository {

    #createFilter(data) {  // private function declared with #
        let filter = {};
        if (data.arrivalTime) {
            filter.arrivalTime = data.arrivalTime;
        }
        if (data.departureTime) {
            filter.departureTime = data.departureTime;
        }
        let price = [];
        if (data.minprice) {
            price.push({ price: { [Op.gte]: data.minprice } });
        }
        if (data.maxprice) {
            price.push({ price: { [Op.lte]: data.maxprice } });
        }
        Object.assign(filter, { [Op.and]: price });
        return filter;
    }

    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }
    async getFlight(flightId) {
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }
    async getAllFlights(filter) {
        try {
            const filterData = this.#createFilter(filter);
            const flights = await Flights.findAll({
                where: filterData
            });
            console.log(filterData);

            console.log(flights);

            return flights;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }

    async updateFlight(flightid, data) {
        try {
            await Flights.update(data, {
                where: {
                    id: flightid
                }
            })
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }
}
module.exports = FlightRepository;
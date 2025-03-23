const { Airplane } = require('../models/index');

class AirplaneRepository {
    async getAirplane(id) {
        try {
            const airplane = await Airplane.findByPk(id);
            console.log(airplane.capacity);
            return airplane;
        } catch (error) {
            console.error("Something went wrong in the airplane repository layer");
            throw { error };
        }
    }
}
module.exports = AirplaneRepository;
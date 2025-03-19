const { City } = require('../models/index');

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            console.error(error);
            throw new Error('Error creating city');
        }
    }

    async delete(cityid) {
        try {
            await City.destroy({
                where: {
                    id: cityid
                }

            })
        }
        catch (error) {
            console.error(error);
            throw new Error('Error deleting city');
        }
    }
}

module.exports = CityRepository;
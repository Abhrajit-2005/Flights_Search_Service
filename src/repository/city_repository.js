const { City } = require('../models/index');
const { Op } = require('sequelize');

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            console.error("Something went wrong in the city repository layer");
            throw { error };
        }
    }

    async createManyCities(cities) {
        try {
            const response = await City.bulkCreate(cities);
            return response;
        }
        catch (error) {
            console.error("Something went wrong in the city repository layer");
            throw { error };
        }
    }

    async deleteCity(cityid) {
        try {
            await City.destroy({
                where: {
                    id: cityid
                }
            });
            return true;
        }
        catch (error) {
            console.error("Something went wrong in the city repository layer");
            throw { error };
        }
    }

    async updateCity(cityid, data) {
        try {
            // Below is the approach to update the data in mysql but will not return the updated data
            // In PGsql, we can use the below approach to get the updated data along with return: true and plain: true
            // mysql donot support this feature
            // const city = await City.update(data, {
            //     where: {
            //         id: cityid
            //     }
            //     return: true
            //     plain: true
            // });

            // for getting updated data in mysql we use the below approach
            const city = await City.findByPk(cityid);
            city.name = data.name;
            await city.save();
            return city;
        }
        catch (error) {
            console.error("Something went wrong in the city repository layer");
            throw { error };
        }
    }

    async getCity(cityid) {
        try {
            const city = await City.findByPk(cityid);
            return city;
        }
        catch (error) {
            console.error("Something went wrong in the city repository layer");
            throw { error };
        }
    }

    async getAllCities(filter) {
        try {
            if (filter.name) {
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        }
        catch (error) {
            console.error("Something went wrong in the city repository layer");
            throw { error };
        }
    }
}

module.exports = CityRepository;
const CrudService = require('./crud_service');
const { AirplaneRepository } = require('../repository/index');

class AirplaneService extends CrudService {
    constructor() {
        super(AirplaneRepository);
    }
}
module.exports = AirplaneService;
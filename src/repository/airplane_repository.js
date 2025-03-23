const { Airplane } = require('../models/index');
const CrudRepository = require('./crud_repository');
class AirplaneRepository extends CrudRepository {
    constructor() {
        super(Airplane);
    }
}
module.exports = AirplaneRepository;
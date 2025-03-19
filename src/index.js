const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverconfig');
const CityRepository = require('./repository/city_repository');
const setupServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        const city = new CityRepository();
        city.delete(2);
    });
}

setupServer();
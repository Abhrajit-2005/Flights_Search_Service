const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverconfig');

const APIRoutes = require('./routes/index');
//const db = require('./models/index');
//const { Airport, City } = require('./models/index');
const setupServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', APIRoutes);

    app.listen(PORT, async () => {
        console.log(`Server is running on port ${PORT}`);

        // if (process.env.SYNC_DB) {
        //     db.sync({ alter: true });
        // }

        // const city = await City.findOne({ where: { id: 3 } });
        // console.log(city);
        // const airports = await city.getAirports();
        // console.log(airports);

    });
}
setupServer();
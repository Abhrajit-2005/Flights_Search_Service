const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverconfig');

const APIRoutes = require('./routes/index');

const setupServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', APIRoutes);

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
setupServer();
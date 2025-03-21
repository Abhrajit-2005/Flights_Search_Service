const express = require('express');
const router = express.Router();

const v1APIRoutes = require('./v1/cityRoutes');
// const v2APIRoutes = require('./v2');

router.use('/v1', v1APIRoutes);
// router.use('/v2', v2APIRoutes);

module.exports = router;
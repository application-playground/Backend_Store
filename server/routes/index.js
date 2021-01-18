const express = require('express');
const router = express.Router();
const countryRouter = require('../routes/countryMaster.route');

router.use('/country-list', countryRouter);

module.exports = router;
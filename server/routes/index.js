const express = require('express');
const router = express.Router();

const countryRouter = require('../routes/countryMaster.route');
const stateRouter = require('../routes/stateMaster.route');

router.use('/country-list', countryRouter);
router.use('/state-list', stateRouter);

module.exports = router;
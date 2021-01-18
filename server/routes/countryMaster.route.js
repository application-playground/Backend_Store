const express = require('express');
const router = express.Router();

const countryController = require('../controllers/countryMaster.controller');

router.get('/', countryController.fetchCountryList );

module.exports = router;

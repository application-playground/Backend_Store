const express = require('express');
const router = express.Router();

const stateController = require('../controllers/stateMaster.controller');

router.get('/:includeCountry', stateController.fetchStateList );

module.exports = router;

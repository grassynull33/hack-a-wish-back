const express = require('express');

const router = express.Router();

const resources_api = require('../controllers/resources_api');

router.get('/', resources_api.get);

module.exports = router;

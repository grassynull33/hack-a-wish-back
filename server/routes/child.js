const express = require('express');

const router = express.Router();

const child_api = require('../controllers/child_api');

router.get('/', child_api.getChildren);
router.post('/', child_api.createChildren);
router.put('/', child_api.editChild);
router.delete('/', child_api.deleteChild);

module.exports = router;

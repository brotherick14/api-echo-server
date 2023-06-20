const express = require('express');
const router = express.Router();
const echoService = require('../services/echoService');

router.get('/files/data', echoService.filesData);

module.exports = router;
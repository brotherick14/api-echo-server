const express = require('express')
const router = express.Router()
const echoService = require('../services/echoService')

router.get('/files/data', echoService.filesData)
router.get('/files/list', echoService.listFiles)

module.exports = router

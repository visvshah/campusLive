const express = require('express')
const router = express.Router()
const { getMarkers, setMarkers, updateMarkers, deleteMarkers } = require('../controllers/markerController')

router.post("/", setMarkers)
router.get("/", getMarkers)

module.exports = router
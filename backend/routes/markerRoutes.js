const express = require('express')
const router = express.Router()
const { getMarkers, setMarkers, updateMarkers, deleteMarkers } = require('../controllers/markerControllers')

router.post("/", setMarkers)
router.get("/", getMarkers)

module.exports = router
const express = require('express')
const router = express.Router()
const { getMarkers, setMarkers, updateMarkers, deleteMarkers } = require('../controllers/markerController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getMarkers).post(protect, setMarkers)

router.route('/:id').put(protect, updateMarkers).delete(protect, deleteMarkers)

module.exports = router
const asyncHandler = require('express-async-handler')

const Marker = require('../models/markerModel')
const User = require('../models/userModel')

const getMarkers = asyncHandler(async (req, res) => {
    const markers = await Marker.find({ user: req.user.id })

    res.status(200).json(markers)
})


const setMarkers = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const marker = await Marker.create({
        text: req.body.text,
        long: req.body.long,
        lat: req.body.lat,
        description: req.body.description
    })
    
    res.status(200).json(marker)
})


const updateMarker = asyncHandler(async (req, res) => {
    const marker = await Marker.findById(req.params.id)

    if (!marker) {
        res.status(400)
        throw new Error('Marker not found')
    }

    const user = await User.findById(req.user.id)


    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }


    if(marker.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }


    const updatedMarker = await Marker.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(200).json(updatedMarker)
})

const deleteMarker = asyncHandler(async (req, res) => {
    const marker = await Marker.findById(req.params.id)
    
    const user = await User.findById(req.user.id)

    // check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // make sure logged in users can only edit their goals
    if(marker.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    if (!marker) {
        res.status(400)
        throw new Error('Marker not found')
    }

    await marker.remove()

    res.status(200).json({ id: req.params.id})
})

module.exports = {
    getMarkers,
    setMarkers,
    updateMarker,
    deleteMarker
}
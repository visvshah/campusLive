const asyncHandler = require('express-async-handler')
const Marker = require('../models/markerModel')
const User = require('../models/userModel')

const getMarkers = asyncHandler(async (req, res) => {
    const markers = await Marker.find({ user: req.user.id })

    res.status(200).json(markers)
})


const setMarkers = asyncHandler(async (req, res) => {
    console.log("In setMarkers");
    console.log(req.body);
    
    try {
        console.log("In Try1");
        const marker = await Marker.create({
            event: req.body.title,
            long: req.body.long,
            lat: req.body.lat,
            description: req.body.description
        })  
        console.log("In Try2");

        await marker.save();
        res.status(201).json(marker);
    } catch (error) {
        console.log(error);
        res.status(409).json({message: error});
    }
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
const mongoose = require('mongoose')

const markerSchema = mongoose.Schema({
    longititude: {
        type: Number,
        required: [true, 'Please add a longititude'],
    },
    latitude: {
        type: Number,
        required: [true, 'Please add a latitude']
    },
    eventName: {
        type: String,
        required: [true, 'Please add an event name']
    },
    eventDescription: {
        type: String,
        required: [true, 'Please add an event description']
    },
    dateTime: {
        type: String,
        required: [true, 'Please add a date and time']
    }
},
{
    timestamps: true
}
)

module.exports = mongoose.model('Marker', markerSchema)
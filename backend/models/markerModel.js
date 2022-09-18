const mongoose = require('mongoose')

const markerSchema = mongoose.Schema({
    long: {
        type: Number,
        required: [true, 'Please add a longititude'],
    },
    lat: {
        type: Number,
        required: [true, 'Please add a latitude']
    },
    event: {
        type: String,
        required: [true, 'Please add an event name']
    },
    description: {
        type: String,
        required: [true, 'Please add an event description']
    },
    dateTime: {
        type: String,
        required: [false, 'Please add a date and time']
    }
},
{
    timestamps: true
}
)

module.exports = mongoose.model('Marker', markerSchema)
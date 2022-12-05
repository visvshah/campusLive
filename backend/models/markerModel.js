import mongoose from "mongoose";

const markerSchema = mongoose.Schema({
    long: {
        type: Number,
        required: [false, 'Please add a longititude'],
    },
    lat: {
        type: Number,
        required: [false, 'Please add a latitude']
    },
    event: {
        type: String,
        required: [false, 'Please add an event name']
    },
    description: {
        type: String,
        required: [false, 'Please add an event description']
    }
},
{
    timestamps: true
}
)

const Marker =  mongoose.model('Marker', markerSchema)
export default Marker;
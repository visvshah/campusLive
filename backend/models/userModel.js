const mongoose = require('mongoose')
const { boolean } = require('webidl-conversions')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
    school: {
        type: String,
        required: [false, 'Please add a school']
    },
    isOrganizer: {
        type: Boolean,
        default: false,
        require: [false, 'Are you an organizer?']
    }
    // purdue admin, club, student
},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)
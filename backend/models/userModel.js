import mongoose from "mongoose";

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

const User =  mongoose.model('User', userSchema);
export default User;
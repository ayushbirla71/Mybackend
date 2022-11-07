const mongoose = require('mongoose');

//////////////////////////~Schema~/////////////////////////
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        required: true
    },
    emailId: String,
    password: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    age: Number,
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

///////////////////////////~Modules~////////////////////////
module.exports = mongoose.model('User', userSchema)

const mongoose = require('mongoose');

/////////////////////////////~Schema~///////////////////////
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    age: Number,
}, { timestamps: true });

///////////////////////////~Modules~/////////////////////////
module.exports = mongoose.model('User', userSchema) //users

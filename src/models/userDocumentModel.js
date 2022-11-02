const mongoose = require('mongoose');

const userDocumentSchema = new mongoose.Schema( {
    Name: String,
    balance:{
        type: Number,
        default:100
    },
    address: String,
    age: Number,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    isFreeAppUser:{
        type:Boolean,
        default:false
    }

}, { timestamps: true });

module.exports = mongoose.model('UserDocument', userDocumentSchema) 
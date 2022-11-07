const mongoose = require('mongoose');

/////////////////////////~Schema~///////////////////
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

//////////////////////////////~Modules~//////////////////////////
module.exports = mongoose.model('UserDocument', userDocumentSchema) 
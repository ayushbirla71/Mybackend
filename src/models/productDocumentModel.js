const mongoose = require('mongoose');

////////////////////~Schema~///////////////////////
const productDocumentSchema = new mongoose.Schema( {
    Name: {
        type: String,
        required:true
    },
    category: {
        type: String,
        required:true
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true });

//////////////////////////~Modules~/////////////////////
module.exports = mongoose.model('ProductDocument', productDocumentSchema) 
const mongoose = require('mongoose');

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

module.exports = mongoose.model('ProductDocument', productDocumentSchema) 
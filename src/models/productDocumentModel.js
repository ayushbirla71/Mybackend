const mongoose = require('mongoose');

const productDocumentSchema = new mongoose.Schema( {
    Name: String,
    category: String,
    price: {
        type: Number,
        required: true
    }

}, { timestamps: true });

module.exports = mongoose.model('ProductDocument', productDocumentSchema) 
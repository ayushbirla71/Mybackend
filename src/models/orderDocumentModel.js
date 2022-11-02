const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderDocumentSchema = new mongoose.Schema( {
    userId:{
        type:ObjectId,
        ref:'UserDocument'
    },
    productId:{
        type:ObjectId,
        ref:'ProductDocument'
    },
    isFreeAppUser:Boolean,
    amount: Number,
    date: String

}, { timestamps: true });

module.exports = mongoose.model('OrderDocument', orderDocumentSchema) 
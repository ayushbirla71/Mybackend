const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

////////////////////////////~OrderDocumentSchema~/////////////////////
const orderDocumentSchema = new mongoose.Schema( {
    userId:{
        type:ObjectId,
        ref:'UserDocument',
        required:true
    },
    productId:{
        type:ObjectId,
        ref:'ProductDocument',
        required:true
    },
    isFreeAppUser:Boolean,
    amount: Number,
    date: String
}, { timestamps: true });

////////////////////////////////~Modules~////////////////////////////
module.exports = mongoose.model('OrderDocument', orderDocumentSchema) 
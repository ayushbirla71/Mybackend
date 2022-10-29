const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author: {
        required:true,
        type: ObjectId,
        ref: "newAuthor"
    }, 
    price: Number,
    ratings: Number,
    publisher: {
        required:true,
        type: ObjectId,
        ref:"newPublisher"
    },
    isHardCover:{
        type:Boolean,
        default:false
    }



}, { timestamps: true });


module.exports = mongoose.model('newBook', bookSchema)

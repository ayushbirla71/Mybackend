const mongoose = require('mongoose');

const bookLsSchema = new mongoose.Schema( {
    bookName:{ 
        type:String,
        require:true
    }, 
    author_id: Number, 
    tags: [String],
    
    isPublished: Boolean,
    prices:Number,
    ratings: Number,
}, { timestamps: true });



module.exports = mongoose.model('BookList', bookLsSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover

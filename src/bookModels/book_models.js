const mongoose=require('mongoose')

const BookScheme=new mongoose.Schema(
    {bookName:{type :String,
        required: true},
    authorName:String,
    category:String,
    year:Number},

{timestamps:true}
);

module.exports=mongoose.model('book', BookScheme)
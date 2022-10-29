const authorModel = require("../models/authorModel")
const publishermodel=require("../models/publisherModel")
const bookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let {author,publisher}=req.body
    if(!author){
        res.send("requir author id")
    }
    if(!publisher){
        res.send("requir publisher id")
    }
    let authorData=await authorModel.findById({_id:author})
    if(!authorData){
        res.send("author not available")
    }
    let publisherData=await publishermodel.findById({_id:publisher})
    if(!publisherData){
        res.send("Publisher not available")
    }
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let allBooksWithAuthor = await bookModel.find().populate('author')
    res.send({data: allBooksWithAuthor})

}
const getBooksWithAuthorAndPublisherDetails = async function (req, res) {
    let allBooksWithAuthorAndPublisher = await bookModel.find().populate('author').populate('publisher');
    res.send({data: allBooksWithAuthorAndPublisher})

}
const BookPrintBy= async function(req, res){
    let publisherId=await publishermodel.find({name:["Penguin","HarperCollins"]}).select({_id:1});
    let bookList=await bookModel.find({publisher:publisherId}).select({_id:1});
    for (let index = 0; index < bookList.length; index++) {
        const bookId = bookList[index];
        let updateData=await bookModel.findByIdAndUpdate(bookId,{$set:{isHardCover:true}})

        console.log(updateData)
    }

}
const updatPrice=async function(req, res){

    let authorList = await authorModel.find({ rating:{$gte:2}}).select({_id:1});
    let bookList=await bookModel.find({author:authorList}).select({_id:1})
    for (let index = 0; index < bookList.length; index++) {
        const bookId = bookList[index];
        let bookPriceUpdate= await bookModel.findByIdAndUpdate(bookId,{$inc:{price:10}})
        console.log(bookPriceUpdate)
        
    }

}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.getBooksWithAuthorAndPublisherDetails=getBooksWithAuthorAndPublisherDetails
module.exports.BookPrintBy=BookPrintBy
module.exports.updatPrice=updatPrice
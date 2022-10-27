const { count } = require("console")
const BookModel= require("../models/bookModel")
const BookLsModel= require("../models/boolLsModel")
const autherModel= require("../models/autherLs")


const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find( {authorName : "HO" } )
    console.log(allBooks)
    if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
    else res.send({msg: "No books found" , condition: false})
}


const updateBooks= async function (req, res) {
    let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
    let allBooks= await BookModel.findOneAndUpdate( 
        { authorName: "ABC"} , //condition
        { $set: data }, //update in data
        { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
     )
     
     res.send( { msg: allBooks})
}

const deleteBooks= async function (req, res) {
    // let data = req.body 
    let allBooks= await BookModel.updateMany( 
        { authorName: "FI"} , //condition
        { $set: {isDeleted: true} }, //update in data
        { new: true } ,
     )
     
     res.send( { msg: allBooks})
}
////////////////////////////////////////////////////////////////////////////////
const getBookLsCreate=async function(req, res){
    let data=req.body
    let list =await BookLsModel.create(data)
    res.send({msg:list})
}

const getAutherLs=async function(req, res){
    let auther=req.body
    let autherList=await autherModel.create(auther)
    res.send({msg:autherList})
}

const getautherbook=async function (req, res){
        let authorId =await autherModel.findOne({author_name:"Ramanujan"}).select({author_id:1, _id:0})

        let bookName=await BookLsModel.find(authorId).select({bookName:1})

    
      res.send({msg: bookName})
    }
const getUser1= async function (req , res){
    let user=await BookLsModel.findOne({bookName:"Tow states"}).select({author_id:1, _id:0})
    let updatPrice=await BookLsModel.findOneAndUpdate(user,{$set:{prices:100}},{new:true}).select({prices:1, _id:0})

    let autherOfThisBook=await autherModel.findOne(user).select({author_name:1, _id:0})
    res.send({updatedPrice : updatPrice.prices, autherOfThisBook:autherOfThisBook.author_name})

}

const getUserData= async function(req, res){
    let userAll=await BookLsModel.find({prices:{$gte:50, $lte:100}}).select({author_id:1, _id:0})
    let userAll1=await BookLsModel.find({prices:{$gte:50, $lte:100}}).select({bookName:1, _id:0})
    let arr=[];
    for(let i=0; i<userAll.length; i++){
        let arr2=await autherModel.findOne(userAll[i]).select({author_name:1, _id:0});
        arr.push(arr2);
    }
    console.log(arr, userAll1)
}



// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.updateBooks= updateBooks
module.exports.deleteBooks= deleteBooks
module.exports.getBookLsCreate=getBookLsCreate
module.exports.getAutherLs=getAutherLs
module.exports.getautherbook=getautherbook
module.exports.getUser1=getUser1
module.exports.getUserData=getUserData

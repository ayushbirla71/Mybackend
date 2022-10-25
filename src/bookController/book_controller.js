const UserModel = require('../bookModels/book_models')
const CreateUser= async function(req, res){
    let book = req.body
    let savedBook= await UserModel.create(book)
    res.send({msg: savedBook})
}

const getUserData= async function(req, res){
    let allBooks=await UserModel.find()
    res.send({msg: allBooks})
}

module.exports.CreateNewBook=CreateUser
module.exports.getAllBookData=getUserData
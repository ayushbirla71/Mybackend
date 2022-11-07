const userModel=require("../models/userDocumentModel")

////////////////////////////~CreateUser~//////////////////////////////
const createUser= async function(req, res){
    const userData= req.body
    const saveData=await userModel.create(userData)
    res.send({msg: saveData})
    console.log(userData)
}

////////////////////////////~Module~///////////////////////////////
module.exports.createUser=createUser
const userModel=require("../models/userDocumentModel")

const createUser= async function(req, res){
    let acceptHeaderValue = req.headers["isfreeappuser"]
    const userData= req.body
    const saveData=await userModel.create(userData)
    
    res.send({msg: saveData})
    console.log(userData)
}


module.exports.createUser=createUser